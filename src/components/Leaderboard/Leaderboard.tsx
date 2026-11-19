'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LeaderboardEntry } from '@/types/leaderboard';
import styles from './Leaderboard.module.scss';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

function formatExternalUrl(rawHandle: string): string {
  const cleaned = rawHandle.trim();
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) {
    return cleaned;
  }
  if (cleaned.startsWith('@')) {
    const username = cleaned.slice(1);
    return `https://instagram.com/${username}`;
  }
  return `https://${cleaned}`;
}

export default function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section id="leaderboard" className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Κατάταξη</h2>
        <span>Η #1 θέση ανήκει στον τελευταίο</span>
      </div>

      <div className={styles.list}>
        <AnimatePresence initial={false}>
          {entries.map((entry, index) => {
            const rank = index + 1;
            const isTop1 = rank === 1;
            const externalUrl = entry.handle ? formatExternalUrl(entry.handle) : null;

            return (
              <motion.article
                key={entry.id}
                layout
                initial={{ opacity: 0, y: -18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 32,
                }}
                className={`${styles.row} ${isTop1 ? styles.topOne : ''}`}
              >
                <div className={styles.rankCol}>
                  <span className={styles.rank}>#{rank}</span>
                </div>

                <div className={styles.info}>
                  <div className={styles.nameLine}>
                    <span className={styles.name}>{entry.name}</span>

                    {entry.handle && externalUrl && (
                      <a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.handle}
                      >
                        <span>{entry.handle}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>

                  {entry.message && (
                    <p className={styles.message}>{entry.message}</p>
                  )}
                </div>

                <div className={styles.priceCol}>
                  <span className={styles.amount}>{entry.amountPaid}€</span>
                  <span className={styles.time}>{entry.createdAt}</span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}