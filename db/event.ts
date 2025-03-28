
export type Event = {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location:string;
  totalSlots: number;
  filledSlots: number;
  creator:{
    userName: string;
    id:string;
    profilePhoto:{
      url:string
    };
  };
  slots:number;
  reservedSlots:number;
  participants?: {
    name: string;
    profilePhoto: string;
  }[];
  thingsToBring?: string[];
  attachments?: {
    type: 'image' | 'video';
    url: string;
  }[];
};
