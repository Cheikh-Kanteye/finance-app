import generateID from "./generateID";

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export type User = {
  id: string;
  name: Name;
  phone: string;
  picture: Picture;
  email: string;
  gender: string;
};

const ContactData: User[] | null = [
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Abdessamad",
      last: "Sikkema",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    },
    phone: "(0003) 442385",
    email: "abdessamad.sikkema@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Ms",
      first: "Veera",
      last: "Ahonen",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
    phone: "04-621-743",
    email: "veera.ahonen@example.com",
  },
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Dain",
      last: "Leeftink",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
    phone: "(006) 8838151",
    email: "dain.leeftink@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Ms",
      first: "Adrijana",
      last: "Blažić",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
    },
    phone: "019-3641-506",
    email: "adrijana.blazic@example.com",
  },
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Rafael",
      last: "Day",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg",
    },
    phone: "03-8431-8777",
    email: "rafael.day@example.com",
  },
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Ricardo",
      last: "Rolón",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    phone: "(697) 918 7072",
    email: "ricardo.rolon@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Ms",
      first: "Stella",
      last: "Picard",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    },
    phone: "04-87-20-07-50",
    email: "stella.picard@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Miss",
      first: "Louise",
      last: "Collins",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg",
    },
    phone: "(248) 960-6977",
    email: "louise.collins@example.com",
  },
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Tejas",
      last: "Chatterjee",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
    },
    phone: "7689807297",
    email: "tejas.chatterjee@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Mrs",
      first: "Melike",
      last: "Elçiboğa",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
    },
    phone: "(322)-397-3507",
    email: "melike.elciboga@example.com",
  },
  {
    id: generateID(),
    gender: "male",
    name: {
      title: "Mr",
      first: "Đoka",
      last: "Erceg",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    },
    phone: "015-0093-212",
    email: "doka.erceg@example.com",
  },
  {
    id: generateID(),
    gender: "female",
    name: {
      title: "Miss",
      first: "Jen",
      last: "Mckinney",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
    phone: "061-972-0988",
    email: "jen.mckinney@example.com",
  },
];

export default ContactData;
