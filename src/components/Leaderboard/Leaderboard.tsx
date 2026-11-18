'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Crown, ExternalLink } from 'lucide-react';
import { LeaderboardEntry } from '@/types/leaderboard';
import styles from './Leaderboard.module.scss';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export default function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Leaderboard</h2>
        <span>Κορυφή = Υψηλότερο ποσό</span>
      </div>

      <div className={styles.list}>
        <AnimatePresence initial={false}>
          {entries.map((entry, index) => {
            const rank = index + 1;
            const isTop1 = rank === 1;
            const isTop3 = rank <= 3;

            return (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: -24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
                className={`${styles.row} ${isTop1 ? styles.topOne : ''} ${
                  isTop3 ? styles.topThree : ''
                }`}
              >
                <div className={styles.rankBadge}>
                  {isTop1 ? <Crown size={16} /> : `#${rank}`}
                </div>

                <div className={styles.info}>
                  <div className={styles.nameLine}>
                    <span className={styles.name}>{entry.name}</span>
                    {entry.handle && (
                      <span className={styles.handle}>
                        {entry.handle}
                        <ExternalLink size={11} />
                      </span>
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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}