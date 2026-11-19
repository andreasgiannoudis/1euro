'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, MousePointerClick } from 'lucide-react';
import { LeaderboardEntry } from '@/types/leaderboard';
import styles from './TopSpotlight.module.scss';

interface TopSpotlightProps {
  leader: LeaderboardEntry;
  nextPrice: number;
  onClaimSpot: () => void;
  onTrackClick: (id: string) => void;
}

function formatExternalUrl(rawHandle: string): string {
  const cleaned = rawHandle.trim();
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) {
    return cleaned;
  }
  if (cleaned.startsWith('@')) {
    return `https://instagram.com/${cleaned.slice(1)}`;
  }
  return `https://${cleaned}`;
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, '0');
  if (hours > 0) {
    return `${hours}ώ ${pad(minutes)}λ ${pad(seconds)}δ`;
  }
  return `${pad(minutes)}λ ${pad(seconds)}δ`;
}

export default function TopSpotlight({
  leader,
  nextPrice,
  onClaimSpot,
  onTrackClick,
}: TopSpotlightProps) {
  const [elapsed, setElapsed] = useState<string>('00λ 00δ');

  useEffect(() => {
    const update = () => {
      setElapsed(formatDuration(Date.now() - leader.claimedAtTimestamp));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [leader.claimedAtTimestamp]);

  const externalUrl = leader.handle ? formatExternalUrl(leader.handle) : null;

  return (
    <section className={styles.wrapper} aria-label="Κάτοχος #1 Θέσης">
      <motion.div
        key={leader.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={styles.card}
      >
        <div className={styles.topBar}>
          <span className={styles.positionTag}>#1 ΣΤΗΝ ΚΟΡΥΦΗ</span>

          <div className={styles.metrics}>
            <span className={styles.metric}>
              <Clock size={13} />
              <span>{elapsed}</span>
            </span>
            <span className={styles.metricDivider}>•</span>
            <span className={styles.metric}>
              <MousePointerClick size={13} />
              <span>{leader.clicks} κλικ</span>
            </span>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.identity}>
            <h2 className={styles.name}>{leader.name}</h2>
            <span className={styles.paid}>{leader.amountPaid}€</span>
          </div>

          {leader.message && (
            <p className={styles.message}>«{leader.message}»</p>
          )}
        </div>

        <div className={styles.footer}>
          {externalUrl && leader.handle ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onTrackClick(leader.id)}
              className={styles.visitLink}
            >
              <span>{leader.handle}</span>
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className={styles.noLink}>Χωρίς σύνδεσμο</span>
          )}

          <button onClick={onClaimSpot} className={styles.dethroneBtn}>
            Πάρε τη θέση με {nextPrice}€
          </button>
        </div>
      </motion.div>
    </section>
  );
}