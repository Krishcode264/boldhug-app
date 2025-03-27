import { events } from "@/db/event";
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

export interface EventState {
  event: Event;
  mediaList: ImagePickerAsset[];
  update: (event: Partial<Event>) => void;
  updateMedia: (mediaList: ImagePickerAsset[]) => void;
  removeMedia: (id: string) => void;
  setDefaultStore: () => void;
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

export const useEventState = create<EventState>((set) => ({
  event: defaultEventState,
  mediaList: [],
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
}));
