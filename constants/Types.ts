export type User={
       id?:string;
       userName:string;
       profilePhoto:string;
}

export type Attachment = {
       type: 'image' | 'video' | string;
       url: string;
     };
     
     export type RepliedTo = {
       messageId: string;
       text?: string;
       username: string;
       attachment?: {type: 'video' | 'image'; url: string};
     };
     export type Message = {
       id: string;
       text: string;
       username: string;
       attachments?: Attachment[];
       repliedTo?: RepliedTo;
     };
     export type UserProfile={
       profilePhoto:string;
       name:string
     }

    export type ActiveListType = 'posts' | 'friends' | 'events';