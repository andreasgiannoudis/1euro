'use client';

import { useState, useMemo } from 'react';
import { INITIAL_ENTRIES } from '@/data/mockEntries';
import { LeaderboardEntry } from '@/types/leaderboard';
import HeroCounter from '@/components/HeroCounter/HeroCounter';
import Leaderboard from '@/components/Leaderboard/Leaderboard';
import ClaimModal from '@/components/ClaimModal/ClaimModal';

export default function HomePage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(INITIAL_ENTRIES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPot = useMemo(
    () => entries.reduce((sum, item) => sum + item.amountPaid, 0),
    [entries]
  );

  const nextPrice = entries.length + 1;

  const handleAddMockEntry = (data: {
    name: string;
    handle?: string;
    message?: string;
  }) => {
    const newEntry: LeaderboardEntry = {
      id: crypto.randomUUID(),
      position: nextPrice,
      name: data.name,
      handle: data.handle,
      message: data.message,
      amountPaid: nextPrice,
      createdAt: 'μόλις τώρα',
    };

    // Μπαίνει στην κορυφή (#1) του πίνακα
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <main>
      <HeroCounter
        totalPot={totalPot}
        nextPrice={nextPrice}
        totalEntries={entries.length}
        onOpenClaim={() => setIsModalOpen(true)}
      />

      <Leaderboard entries={entries} />

      <ClaimModal
        isOpen={isModalOpen}
        nextPrice={nextPrice}
        onClose={() => setIsModalOpen(false)}
        onConfirmMock={handleAddMockEntry}
      />
    </main>
  );
}