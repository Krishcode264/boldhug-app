
import type { EventPostProps } from '@/components/event/EventPost';
import type { extractedProps } from 'react-native-svg';


export const users: User[] = [
  {
    userName: 'samruddhi',
    profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    userName: 'shrinidhi',
    profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    userName: 'Catherine Brown',
    profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    userName: 'Daniel Williams',
    profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    userName: 'Ella Davis',
    profilePhoto: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    userName: 'Frank Wilson',
    profilePhoto: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    userName: 'Grace Miller',
    profilePhoto: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    userName: 'Henry Moore',
    profilePhoto: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    userName: 'Isabella Taylor',
    profilePhoto: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    userName: 'Jack Anderson',
    profilePhoto: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
 
];
type CommentWithId = CommentProps & {id: string};

export const comments: CommentWithId[] = [
  {
    id: '1',
    profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
    userName: 'JohnDoe',
    content: 'This is such an insightful post! Thanks for sharing.',
  },
  {
    id: '2',
    profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
    userName: 'JaneSmith',
    content: 'Amazing content! Really enjoyed reading this.',
  },
  {
    id: '3',
    profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'MikeJohnson',
    content: 'I totally agree with your points. Great work!',
  },
  {
    id: '4',
    profilePhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
    userName: 'EmilyClark',
    content: 'Well-written and very informative. Keep it up!',
  },
  {
    id: '5',
    profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'ChrisBrown',
    content: 'Thanks for sharing this. Learned something new today.',
  },
];



export const messageData:Message[] = [
  {
    id: 'msg1',
    text: 'Hey there! How are you?',
    username: 'johndoe',
    attachments: [],
  },
  {
    id: 'msg2',
    text: "I'm good! How about you?",
    username: 'janedoe',
    attachments: [],
    repliedTo: {
      messageId: 'msg1',
      text: 'Hey there! How are you?',
      username: 'johndoe',
    },
  },
  {
    id: 'msg3',
    text: 'Check out this beautiful sunset I captured.',
    username: 'traveller123',
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
      },
    ],
  },
  {
    id: 'msg4',
    text: "Wow, that's amazing! Where is this?",
    username: 'naturelover',
    attachments: [],
    repliedTo: {
      messageId: 'msg3',
      text: 'Check out this beautiful sunset I captured.',
      username: 'traveller123',
      attachment: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      },
    },
  },
  {
    id: 'msg5',
    text: 'Sharing a quick workout video. Let me know your thoughts!',
    username: 'fitlife',
    attachments: [

   
    ],
  },
  {
    id: 'msg6',
    text: 'This is so inspiring! Thanks for sharing.',
    username: 'motivated',
    attachments: [],
    repliedTo: {
      messageId: 'msg5',
      text: 'Sharing a quick workout video. Let me know your thoughts!',
      username: 'fitlife',
      
    },
  },
  {
    id: 'msg7',
    text: "Here's a cute puppy picture to make your day!",
    username: 'petlover',
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
      },
    ],
  },
  {
    id: 'msg8',
    text: "Can't handle the cuteness! Thanks for sharing.",
    username: 'animalfan',
    attachments: [],
    repliedTo: {
      messageId: 'msg7',
      text: "Here's a cute puppy picture to make your day!",
      username: 'petlover',
    },
  },
  {
    id: 'msg9',
    text: 'A quick recipe video for everyone!',
    username: 'chefmode',
    attachments: [
 
    ],
  },
  {
    id: 'msg10',
    text: "Just finished the recipe! It's delicious.",
    username: 'foodie',
    attachments: [],
    repliedTo: {
      messageId: 'msg9',
      text: 'A quick recipe video for everyone!',
      username: 'chefmode',
    },
  },
  {
    id: 'msg11',
    text: 'What do you think of this design?',
    username: 'designerlife',
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1563132332-f23b0a3094d5',
      },
    ],
  },
  {
    id: 'msg12',
    text: 'Love the minimalist style! Great work.',
    username: 'artenthusiast',
    attachments: [],
    repliedTo: {
      messageId: 'msg11',
      text: 'What do you think of this design?',
      username: 'designerlife',
    },
  },
  {
    id: 'msg13',
    text: "Throwback to last year's vacation.",
    username: 'wanderer',
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98',
      },
    ],
  },
  {
    id: 'msg14',
    text: 'Looks like an incredible place! Where is it?',
    username: 'traveladdict',
    attachments: [],
    repliedTo: {
      messageId: 'msg13',
      text: "Throwback to last year's vacation.",
      username: 'wanderer',
    },
  },
  {
    id: 'msg15',
    text: "Here's a quick clip from our latest gig!",
    username: 'bandlife',
    attachments: [
    
    ],
  },
];

import { EventPostType } from '@/components/event/EventPost';
import type { CommentProps } from '../components/event/Comment';
import { Message, User } from '@/constants/Types';

export const eventsdata: EventPostType[] = [
  {
    userName: 'Alice Harper',
    profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Nature Photography Walk',
    tags: ['nature', 'photography', 'outdoors'],
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      },
      {
        type:"video",
        url:"https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    stats: {
      likes: 145,
      comments: 22,
      shares: 17,
    },
  },
  {
    userName: 'James Mitchell',
    profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Weekend Coding Marathon',
    tags: ['coding', 'hackathon', 'weekend'],
    attachments: [

    ],
    stats: {
      likes: 200,
      comments: 35,
      shares: 12,
    },
  },
  {
    userName: 'Sophia Ramirez',
    profilePhoto: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Evening Yoga Session',
    tags: ['yoga', 'health', 'wellness'],
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366',
      },
  
    ],
    stats: {
      likes: 87,
      comments: 12,
      shares: 5,
    },
  },
  {
    userName: 'Liam Wilson',
    profilePhoto: 'https://randomuser.me/api/portraits/men/55.jpg',
    title: 'Mountain Biking Adventure',
    tags: ['adventure', 'biking', 'mountains'],
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366',
      }
    ],
    stats: {
      likes: 120,
      comments: 20,
      shares: 9,
    },
  },
  {
    userName: 'Emma Taylor',
    profilePhoto: 'https://randomuser.me/api/portraits/women/65.jpg',
    title: 'DIY Craft Workshop',
    tags: ['crafts', 'DIY', 'workshop'],
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366',
      },
    ],
    stats: {
      likes: 75,
      comments: 8,
      shares: 6,
    },
  },
];
