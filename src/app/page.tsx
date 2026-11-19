'use client';

import { useState } from 'react';
import { INITIAL_ENTRIES } from '@/data/mockEntries';
import { LeaderboardEntry } from '@/types/leaderboard';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import HeroCounter from '@/components/HeroCounter/HeroCounter';
import TopSpotlight from '@/components/TopSpotlight/TopSpotlight';
import Leaderboard from '@/components/Leaderboard/Leaderboard';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import ClaimModal from '@/components/ClaimModal/ClaimModal';

export default function HomePage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(INITIAL_ENTRIES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextPrice = entries.length + 1;
  const currentLeader = entries[0];

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
      clicks: 0,
      claimedAtTimestamp: Date.now(),
      createdAt: 'μόλις τώρα',
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  const handleTrackClick = (id: string) => {
    setEntries((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, clicks: item.clicks + 1 } : item
      )
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        nextPrice={nextPrice}
        onOpenClaim={() => setIsModalOpen(true)}
      />

      <main style={{ flex: 1 }}>
        <HeroCounter
          nextPrice={nextPrice}
          onOpenClaim={() => setIsModalOpen(true)}
        />

        {currentLeader && (
          <TopSpotlight
            leader={currentLeader}
            nextPrice={nextPrice}
            onClaimSpot={() => setIsModalOpen(true)}
            onTrackClick={handleTrackClick}
          />
        )}

        <Leaderboard entries={entries} />

        <HowItWorks />
      </main>

      <Footer />

      <ClaimModal
        isOpen={isModalOpen}
        nextPrice={nextPrice}
        onClose={() => setIsModalOpen(false)}
        onConfirmMock={handleAddMockEntry}
      />
    </div>
  );
}