'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Flame } from 'lucide-react';
import styles from './HeroCounter.module.scss';

interface HeroCounterProps {
  totalPot: number;
  nextPrice: number;
  totalEntries: number;
  onOpenClaim: () => void;
}

export default function HeroCounter({
  totalPot,
  nextPrice,
  totalEntries,
  onOpenClaim,
}: HeroCounterProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.badge}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Flame size={14} className={styles.flame} />
        <span>Live Πείραμα • +1€ κάθε νέα θέση</span>
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Πόσο ψηλά μπορεί να φτάσει;
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Ο 1ος πλήρωσε 1€. Κάθε επόμενος πληρώνει 1€ παραπάνω και παίρνει την{' '}
        <strong>#1 θέση</strong> στην κορυφή.
      </motion.p>

      <motion.div
        className={styles.statsCard}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className={styles.statBox}>
          <span className={styles.statLabel}>Συνολικό Ποσό</span>
          <motion.span
            key={totalPot}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.statValue}
          >
            {totalPot.toLocaleString('el-GR')}€
          </motion.span>
        </div>

        <div className={styles.divider} />

        <div className={styles.statBox}>
          <span className={styles.statLabel}>Συμμετοχές</span>
          <span className={styles.statValue}>{totalEntries}</span>
        </div>
      </motion.div>

      <motion.button
        className={styles.ctaButton}
        onClick={onOpenClaim}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Πάρε την #1 θέση με {nextPrice}€</span>
        <ArrowUpRight size={18} />
      </motion.button>
    </section>
  );
}