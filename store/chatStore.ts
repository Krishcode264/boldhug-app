import { ImagePickerAsset } from "expo-image-picker";
import { create } from "zustand";


export type MediaItem = {
    uri?: string;
    url?:string
    type: 'image' | 'video' | string;
  } ;

  interface MediaViewer{
    mediaList:MediaItem[]
    setMediaList:(list:MediaItem[])=>void;
    clearMediaList:()=>void
  }

  export const useMediaViewerState=create<MediaViewer>((set)=>({
    mediaList:[],
    setMediaList:(list)=>set({mediaList:list}),
    clearMediaList:()=>set({mediaList:[]})
  }))