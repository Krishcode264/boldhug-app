import { queryClient } from "@/app/_layout";

import api from "@/util/axios";
import { sendtoS3 } from "@/util/functions";
import { ImagePickerAsset } from "expo-image-picker";
import { create } from "zustand";

export type Event = {
  title: string;
  description: string;
  location: string;
  slots: number;
  reservedSlots: number;
  date: Date;
  time: string;
};

export type Status = {
  label: string;
  progress: number;
  status: "pending" | "processing" | "failed" | "success";
};

export interface EventState {
  event: Event;
  mediaList: ImagePickerAsset[];
  status: Status | null;
  update: (event: Partial<Event>) => void;
  updateMedia: (mediaList: ImagePickerAsset[]) => void;
  removeMedia: (id: string) => void;
  setDefaultStore: () => void;
  createEvent: () => Promise<void>;
}

let defaultEventState: Event = {
  time: "",
  date: new Date(),
  description: "",
  slots: 0,
  reservedSlots: 0,
  title: "",
  location: "",
};

export const useEventState = create<EventState>((set, get) => ({
  event: defaultEventState,
  mediaList: [],
  status: { label: "", progress: 0, status:"pending" },
  setDefaultStore: () =>
    set((store) => ({ event: defaultEventState, mediaList: [] })),
  removeMedia: (filename) =>
    set((store) => ({
      mediaList: store.mediaList.filter((media) => media.fileName !== filename),
    })),
  updateMedia: (state) =>
    set((store) => {
      const combinedMedia = [...store.mediaList, ...state];

      const uniqueMedia = combinedMedia.filter(
        (item, index, self) =>
          index === self.findIndex((m) => m.fileName === item.fileName)
      );
      //   console.log(uniqueMedia)
      return { mediaList: uniqueMedia };
    }),

  update: (state) =>
    set((eventStore) => ({ event: { ...eventStore.event, ...state } })),

  createEvent: async () => {
    set({
      status: { label: "creating event", progress: 10, status: "processing" },
    });
    try {
      const eventResponse = await api.post("/event", { event:get().event });
      if (!eventResponse.data.success) throw new Error("Event creation failed");
      set({
        status: {
          label: "generating presigned urls",
          progress: 30,
          status: "processing",
        },
      });
      if (eventResponse.data.success) {
        const getSignedUrls = await api.post("/media/preurl", {
          data: get().mediaList.map((media) => ({
            type: media.type,
            fileName: media.fileName,
          })),
          mediaGroupId: eventResponse.data.event.id,
          mediaGroupType: "event",
        });
        if (!getSignedUrls.data.urlArray)
          throw new Error("Failed to get signed URLs");
        set({
          status: {
            label: "sending media files",
            progress: 50,
            status: "processing",
          },
        });
        if (getSignedUrls.data.urlArray) {
          //  console.log("we got the array of signed urls ");
          const alldata = await sendtoS3({
            media: get().mediaList,
            urlArray: getSignedUrls.data.urlArray,
          });
          if (!alldata) throw new Error("S3 upload failed");
          set({
            status: {
              label: "confirming upload with server",
              progress: 80,
              status: "processing",
            },
          });
          //  console.log("we sent it to s3 just heyyy ");

          if (alldata) {
            const finalres = await api.post("/media/confirm", {
              data: alldata,
              mediaGroupId: eventResponse.data.event.id,
              parentType: "event",
            });
            if (!finalres.data.success)
              throw new Error("Media confirmation failed");
            queryClient.invalidateQueries({ queryKey: ["event"] })
            set({
              status: {
                label: "completed , Event created ",
                progress: 100,
                status: "success",
              },
            });
            if (finalres.data.success) {
              console.log("hey all done bro chill here , confirmation done ");
            }
          }
        }
      }
    } catch (err) {
      set({
        status: {
          label: "there was error creating event for you 😭",
          progress: 50,
          status: "failed",
        },
      });
      console.log("something got wrong", err);
    }
  },
}));
