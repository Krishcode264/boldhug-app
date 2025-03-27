import type { ClassValue } from "clsx";
import clsx from "clsx";
import { ImagePickerAsset } from "expo-image-picker";
import { twMerge } from "tailwind-merge";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import { Buffer } from 'buffer';
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export type UrlResponseItemType = {
  fileName: string;
  key: string;
  url: string;
};
export type SendToS3Type = {
  media: ImagePickerAsset[];
  urlArray: UrlResponseItemType[];
};

export const sendtoS3 = async ({ media, urlArray }: SendToS3Type) => {
  try {
    const allData = Promise.all(
      urlArray.map(async (url) => {
        const targetMedia = media.filter(
          (file) => file.fileName === url.fileName
        )[0];
        const fileData = await FileSystem.readAsStringAsync(
          targetMedia.uri as string,
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );

        const fileBuffer = Buffer.from(fileData, "base64");
        const res = await axios.put(url.url, fileBuffer, {
          headers: { "Content-Type": targetMedia?.type },
        });

        return { key: url.key, type: targetMedia.type };
      })
    );

    return allData;
  } catch (err) {
    console.log("some error at send tos3 fucntion", err);
    return null;
  }
};
