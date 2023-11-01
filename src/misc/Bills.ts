import generateID from "./generateID";

export type PaymentHistory = {
  date: string;
  amount: number;
  currency: string;
  status: "paid" | "unpaid";
};

export type MonthlyData = {
  id: string;
  service: string;
  amount: number;
  currency: string;
  date: string;
  status: "paid" | "unpaid";
  payment_history: PaymentHistory[];
  logoUrl: string;
};

export const MONTHLY_BILLS: MonthlyData[] = [
  {
    id: generateID(),
    service: "Electricity",
    amount: 95.5,
    currency: "USD",
    date: "2023-10-01",
    status: "paid",
    payment_history: [
      {
        date: "2023-10-01",
        amount: 95.5,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-09-01",
        amount: 95.5,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-08-01",
        amount: 95.5,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/4514/4514764.png",
  },
  {
    id: generateID(),
    service: "Netflix",
    amount: 15.0,
    currency: "USD",
    date: "2023-10-15",
    status: "paid",
    payment_history: [
      {
        date: "2023-10-15",
        amount: 15.0,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-09-01",
        amount: 15.0,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-08-15",
        amount: 15.0,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-07-01",
        amount: 15.0,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/732/732228.png",
  },
  {
    id: generateID(),
    service: "Internet",
    amount: 75.0,
    currency: "USD",
    date: "2023-10-05",
    status: "unpaid",
    payment_history: [
      {
        date: "2023-10-01",
        amount: 75.0,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-09-01",
        amount: 75.0,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-09-01",
        amount: 75.0,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/1183/1183666.png",
  },
  {
    id: generateID(),
    service: "Spotify",
    amount: 12.99,
    currency: "USD",
    date: "2023-10-20",
    status: "unpaid",
    payment_history: [
      {
        date: "2023-09-20",
        amount: 12.99,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-08-20",
        amount: 12.99,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-07-20",
        amount: 12.99,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-06-20",
        amount: 12.99,
        currency: "USD",
        status: "paid",
      },
      {
        date: "2023-05-20",
        amount: 12.99,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/3669/3669986.png",
  },
  {
    id: generateID(),
    service: "Water",
    amount: 60.0,
    currency: "USD",
    date: "2023-10-10",
    status: "unpaid",
    payment_history: [],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/8085/8085833.png",
  },
  {
    id: generateID(),
    service: "HBO Max",
    amount: 9.99,
    currency: "USD",
    date: "2023-10-25",
    status: "paid",
    payment_history: [
      {
        date: "2023-10-25",
        amount: 9.99,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968668.png",
  },
  {
    id: generateID(),
    service: "Gas",
    amount: 85.0,
    currency: "USD",
    date: "2023-10-18",
    status: "paid",
    payment_history: [
      {
        date: "2023-10-18",
        amount: 85.0,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/9747/9747073.png",
  },
  {
    id: generateID(),
    service: "Disney+",
    amount: 7.99,
    currency: "USD",
    date: "2023-10-28",
    status: "unpaid",
    payment_history: [],
    logoUrl: "https://img.icons8.com/?size=80&id=uLKd8Dj2dluy&format=png",
  },
  {
    id: generateID(),
    service: "Telephone",
    amount: 70.0,
    currency: "USD",
    date: "2023-10-22",
    status: "unpaid",
    payment_history: [],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/4814/4814483.png",
  },
  {
    id: generateID(),
    service: "Apple Music",
    amount: 9.99,
    currency: "USD",
    date: "2023-10-30",
    status: "paid",
    payment_history: [
      {
        date: "2023-10-30",
        amount: 9.99,
        currency: "USD",
        status: "paid",
      },
    ],
    logoUrl: "https://cdn-icons-png.flaticon.com/128/11104/11104167.png",
  },
];
