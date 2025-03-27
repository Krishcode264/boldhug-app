
export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location:{
    name: string;
    googleMapsLink: string;
  };
  totalSlots: number;
  filledSlots: number;
  host:{
    name: string;
    profilePhoto: string;
  };
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

export const events:Event[] = [
  {
    id: 1,
    title: 'Morning Badminton',
    description: 'Anyone wanna play badminton in the morning this weekend?',
    date: '2024-12-08',
    time: '6 AM - 9 AM',
    location: {
      name: 'Green Ground Adjacent to Swiss Academy',
      googleMapsLink: 'https://maps.google.com/?q=Green+Ground+Swiss+Academy',
    },
    totalSlots: 2,
    filledSlots: 1,
    host: {
      name: 'Krishna',
      profilePhoto: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    participants: [
      {
        name: 'Arjun',
        profilePhoto: 'https://randomuser.me/api/portraits/men/76.jpg',
      },
    ],
    thingsToBring: ['Badminton Racquet', 'Shoes', 'Water Bottle'],
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/300x200.png?text=Badminton+Court',
      },
    
    ],
  },
  {
    id: 2,
    title: 'Weekend Yoga Session',
    description: 'Relax and rejuvenate with a guided yoga session.',
    date: '2024-12-09',
    time: '7 AM - 8 AM',
    location: {
      name: 'Sunset Park',
      googleMapsLink: 'https://maps.google.com/?q=Sunset+Park',
    },
    totalSlots: 10,
    filledSlots: 7,
    host: {
      name: 'Priya',
      profilePhoto: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    participants: [
      {
        name: 'Meera',
        profilePhoto: 'https://randomuser.me/api/portraits/women/70.jpg',
      },
      {
        name: 'Ravi',
        profilePhoto: 'https://randomuser.me/api/portraits/men/65.jpg',
      },
    ],
    thingsToBring: ['Yoga Mat', 'Water Bottle', 'Towel'],
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/300x200.png?text=Yoga+Session',
      },
    ],
  },
  {
    id: 3,
    title: 'Cycling in the Hills',
    description: 'Join us for a refreshing cycling experience in the hills.',
    date: '2024-12-10',
    time: '5 AM - 8 AM',
    location: {
      name: 'Hilltop Valley',
      googleMapsLink: 'https://maps.google.com/?q=Hilltop+Valley',
    },
    totalSlots: 15,
    filledSlots: 10,
    host: {
      name: 'Aman',
      profilePhoto: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
    participants: [
      {
        name: 'Rohan',
        profilePhoto: 'https://randomuser.me/api/portraits/men/83.jpg',
      },
      {
        name: 'Simran',
        profilePhoto: 'https://randomuser.me/api/portraits/women/80.jpg',
      },
    ],
    thingsToBring: ['Bicycle', 'Helmet', 'Energy Bars'],
    attachments: [
      {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    ],
  },
  {
    id: 4,
    title: 'Movie Night',
    description: "Let's watch the latest blockbuster together.",
    date: '2024-12-11',
    time: '8 PM - 11 PM',
    location: {
      name: 'City Mall Cineplex',
      googleMapsLink: 'https://maps.google.com/?q=City+Mall+Cineplex',
    },
    totalSlots: 5,
    filledSlots: 3,
    host: {
      name: 'Rahul',
      profilePhoto: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    participants: [
      {
        name: 'Nisha',
        profilePhoto: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        name: 'Vikram',
        profilePhoto: 'https://randomuser.me/api/portraits/men/69.jpg',
      },
    ],
    thingsToBring: ['Popcorn Money', '3D Glasses (Optional)'],
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/300x200.png?text=Movie+Poster',
      },
    ],
  },
  {
    id: 5,
    title: 'Coding Hackathon',
    description: 'Collaborate and create cool projects in this hackathon!',
    date: '2024-12-15',
    time: '10 AM - 6 PM',
    location: {
      name: 'Tech Hub Community Center',
      googleMapsLink: 'https://maps.google.com/?q=Tech+Hub+Community+Center',
    },
    totalSlots: 50,
    filledSlots: 30,
    host: {
      name: 'Sonia',
      profilePhoto: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
    participants: [
      {
        name: 'Ajay',
        profilePhoto: 'https://randomuser.me/api/portraits/men/40.jpg',
      },
      {
        name: 'Divya',
        profilePhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
      },
    ],
    thingsToBring: ['Laptop', 'Chargers', 'ID Card'],
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/300x200.png?text=Hackathon+Poster',
      },
    ],
  },
  {
    id: 6,
    title: 'Beach Cleanup Drive',
    description: "Let's keep our beaches clean! Join our cleanup drive.",
    date: '2024-12-16',
    time: '8 AM - 12 PM',
    location: {
      name: 'Marine Beach',
      googleMapsLink: 'https://maps.google.com/?q=Marine+Beach',
    },
    totalSlots: 100,
    filledSlots: 50,
    host: {
      name: 'Ananya',
      profilePhoto: 'https://randomuser.me/api/portraits/women/60.jpg',
    },
    participants: [
      {
        name: 'Karan',
        profilePhoto: 'https://randomuser.me/api/portraits/men/70.jpg',
      },
      {
        name: 'Sara',
        profilePhoto: 'https://randomuser.me/api/portraits/women/80.jpg',
      },
    ],
    thingsToBring: ['Gloves', 'Trash Bags', 'Sun Hat'],
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/300x200.png?text=Beach+Cleanup',
      },
    ],
  },
  {
    id: 7,
    title: 'Music Concert',
    description: 'Experience an electrifying night with live music!',
    date: '2024-12-20',
    time: '7 PM - 11 PM',
    location: {
      name: 'Rock Arena',
      googleMapsLink: 'https://maps.google.com/?q=Rock+Arena',
    },
    totalSlots: 200,
    filledSlots: 150,
    host: {
      name: 'DJ Max',
      profilePhoto: 'https://randomuser.me/api/portraits/men/90.jpg',
    },
    participants: [
      {
        name: 'Arav',
        profilePhoto: 'https://randomuser.me/api/portraits/men/91.jpg',
      },
      {
        name: 'Saanvi',
        profilePhoto: 'https://randomuser.me/api/portraits/women/92.jpg',
      },
    ],
    thingsToBring: ['Concert Ticket', 'ID Card'],
    attachments: [
      {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/sample.mp4',
      },
    ],
  },
  {
    id: 8,
    title: "Anyone wanna play cricket near City Park today?",
    description: "I’m thinking of a casual cricket match in the afternoon. Just need a few more players to form a team.",
    date: "2024-12-06",
    time: "4 PM - 6 PM",
    location: {
      name: "City Park Cricket Ground",
      googleMapsLink: "https://maps.google.com/?q=City+Park+Cricket+Ground",
    },
    totalSlots: 8,
    filledSlots: 4,
    host: {
      name: "Krishna",
      profilePhoto: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    participants: [
      { name: "Arjun", profilePhoto: "https://randomuser.me/api/portraits/men/80.jpg" },
      { name: "Ravi", profilePhoto: "https://randomuser.me/api/portraits/men/81.jpg" },
    ],
    thingsToBring: ["Cricket Bat", "Ball"],
  },
  {
    id: 9,
    title: "Travel buddy for a weekend trip to Ooty?",
    description: "I’m planning a quick trip to Ooty this weekend. Would be nice to have someone tag along for company.",
    date: "2024-12-09",
    time: "Leaving at 6 AM, returning the next day by 8 PM",
    location: {
      name: "Ooty, Tamil Nadu",
      googleMapsLink: "https://maps.google.com/?q=Ooty",
    },
    totalSlots: 2,
    filledSlots: 1,
    host: {
      name: "Anjali",
      profilePhoto: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    thingsToBring: ["Comfortable shoes", "Jacket", "Camera"],
  },
  {
    id: 10,
    title: "Exploring Japan’s Kyoto temples, anyone nearby?",
    description: "I’m in Kyoto and planning to visit Fushimi Inari Shrine tomorrow. Anyone else here interested?",
    date: "2024-12-08",
    time: "9 AM - 1 PM",
    location: {
      name: "Fushimi Inari Shrine, Kyoto",
      googleMapsLink: "https://maps.google.com/?q=Fushimi+Inari+Shrine",
    },
    totalSlots: 5,
    filledSlots: 1,
    host: {
      name: "Ken",
      profilePhoto: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    thingsToBring: ["Comfortable clothes", "Camera", "Snacks"],
  },
  {
    id: 11,
    title: "Looking for a hiking partner for Churdhar Trek this weekend!",
    description: "Anyone interested in a trek to Churdhar Peak? It’s a challenging but rewarding hike.",
    date: "2024-12-07",
    time: "Starting at 7 AM",
    location: {
      name: "Churdhar Trek Starting Point",
      googleMapsLink: "https://maps.google.com/?q=Churdhar+Trek",
    },
    totalSlots: 3,
    filledSlots: 1,
    host: {
      name: "Raj",
      profilePhoto: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    thingsToBring: ["Trekking Gear", "Water Bottle", "Energy Bars"],
  },
  {
    id: 12,
    title: "Dinner plans? Anyone up for trying out Indian cuisine at Spice Kitchen?",
    description: "I’m craving Indian food and planning to go to Spice Kitchen tonight. Anyone interested in joining?",
    date: "2024-12-06",
    time: "7 PM - 9 PM",
    location: {
      name: "Spice Kitchen, Downtown",
      googleMapsLink: "https://maps.google.com/?q=Spice+Kitchen",
    },
    totalSlots: 4,
    filledSlots: 2,
    host: {
      name: "Meera",
      profilePhoto: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    participants: [
      { name: "Amit", profilePhoto: "https://randomuser.me/api/portraits/men/85.jpg" },
    ],
    thingsToBring: ["Appetite!"],
  },
  {
    id: 13,
    title: "Anyone wanna play chess at the community library today?",
    description: "I’m heading to the library this evening for a few rounds of chess. It’s casual, just for fun!",
    date: "2024-12-06",
    time: "5 PM - 7 PM",
    location: {
      name: "Central Library Chess Room",
      googleMapsLink: "https://maps.google.com/?q=Central+Library",
    },
    totalSlots: 2,
    filledSlots: 1,
    host: {
      name: "Ayaan",
      profilePhoto: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    thingsToBring: ["Chess set (if you have one)"],
  },
  {
    id: 14,
    title: "Need a jogging partner in Central Park tomorrow morning.",
    description: "I’m going for a 5k jog at Central Park tomorrow and would love some company.",
    date: "2024-12-07",
    time: "6 AM - 7 AM",
    location: {
      name: "Central Park Jogging Track",
      googleMapsLink: "https://maps.google.com/?q=Central+Park",
    },
    totalSlots: 2,
    filledSlots: 1,
    host: {
      name: "Aisha",
      profilePhoto: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    thingsToBring: ["Running shoes", "Water bottle"],
  }

];
