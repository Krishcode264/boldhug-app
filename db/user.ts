
import { type EventPostType} from '@/components/event/EventPost';
import { eventsdata, users } from "./db";

import { events ,Event} from "./event";
import { User } from '@/constants/Types';

export type UserProfile={
    name:string,
    profilePhoto:string,
    friends:User[],
    age:number,
    gender:"male"|"female"|"other",
    eventPost:EventPostType[],
    events:Event[]

}


export const UserprofileData: UserProfile = {
  name: 'krishna',
  profilePhoto:'https://randomuser.me/api/portraits/men/4.jpg',
  friends: users,
  age: 21,
  events:events,
  gender:"male",
  eventPost: eventsdata,
};