import { LeaderboardEntry } from '@/types/leaderboard';

const NOW = Date.now();

export const INITIAL_ENTRIES: LeaderboardEntry[] = [
  {
    id: '5',
    position: 5,
    name: 'Nikoleta K.',
    handle: '@nikoleta.style',
    message: 'Ποιος θα με ρίξει από την κορυφή;',
    amountPaid: 5,
    clicks: 48,
    claimedAtTimestamp: NOW - 1000 * 60 * 42, // πριν 42 λεπτά
    createdAt: 'πριν 42 λεπτά',
  },
  {
    id: '4',
    position: 4,
    name: 'Coffee Lab SKG',
    handle: '@coffeelab_skg',
    message: 'Ο καλύτερος espresso της πόλης.',
    amountPaid: 4,
    clicks: 94,
    claimedAtTimestamp: NOW - 1000 * 60 * 120,
    createdAt: 'πριν 2 ώρες',
  },
  {
    id: '3',
    position: 3,
    name: 'Δημήτρης Π.',
    message: 'Μπήκα πριν πάει 50€.',
    amountPaid: 3,
    clicks: 19,
    claimedAtTimestamp: NOW - 1000 * 60 * 195,
    createdAt: 'πριν 3 ώρες',
  },
  {
    id: '2',
    position: 2,
    name: 'Andreas Digital Solutions',
    handle: 'andreasdigitalsolutions.com',
    message: 'Custom Web Engineering & E-Commerce.',
    amountPaid: 2,
    clicks: 163,
    claimedAtTimestamp: NOW - 1000 * 60 * 310,
    createdAt: 'πριν 5 ώρες',
  },
  {
    id: '1',
    position: 1,
    name: 'Γιώργος Μ.',
    message: 'Πρώτος. 1€ για την ιστορία.',
    amountPaid: 1,
    clicks: 82,
    claimedAtTimestamp: NOW - 1000 * 60 * 480,
    createdAt: 'πριν 8 ώρες',
  },
];