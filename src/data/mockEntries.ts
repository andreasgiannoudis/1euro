import { LeaderboardEntry } from '@/types/leaderboard';

// Ταξινομημένα από τον πιο πρόσφατο (που πλήρωσε τα περισσότερα) προς τον 1ο (1€)
export const INITIAL_ENTRIES: LeaderboardEntry[] = [
  {
    id: '5',
    position: 5,
    name: 'Nikoleta K.',
    handle: '@nikoleta.style',
    message: 'Ποιος θα με ρίξει από την κορυφή;',
    amountPaid: 5,
    createdAt: 'πριν 2 λεπτά',
  },
  {
    id: '4',
    position: 4,
    name: 'Coffee Lab SKG',
    handle: '@coffeelab_skg',
    message: 'Ο καλύτερος espresso της πόλης ☕',
    amountPaid: 4,
    createdAt: 'πριν 14 λεπτά',
  },
  {
    id: '3',
    position: 3,
    name: 'Δημήτρης Π.',
    message: 'Μπήκα πριν πάει 50€ 😂',
    amountPaid: 3,
    createdAt: 'πριν 29 λεπτά',
  },
  {
    id: '2',
    position: 2,
    name: 'Alex Dev',
    handle: 'andreasdigitalsolutions.com',
    message: 'Building cool stuff.',
    amountPaid: 2,
    createdAt: 'πριν 1 ώρα',
  },
  {
    id: '1',
    position: 1,
    name: 'Γιώργος Μ.',
    message: 'Πρώτος! 1€ για την ιστορία.',
    amountPaid: 1,
    createdAt: 'πριν 2 ώρες',
  },
];