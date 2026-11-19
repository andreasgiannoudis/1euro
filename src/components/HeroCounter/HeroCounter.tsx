'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './HeroCounter.module.scss';

interface HeroProps {
  nextPrice: number;
  onOpenClaim: () => void;
}

export default function HeroCounter({ nextPrice, onOpenClaim }: HeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className={styles.title}>
          Πόσο ψηλά <br />
          <span>μπορεί να φτάσει;</span>
        </h1>

        <p className={styles.subtitle}>
          Ο πρώτος ξεκίνησε από 1€. Κάθε επόμενος ανεβάζει τον πήχη κατά 1€ 
          και καταλαμβάνει την #1 θέση.
        </p>

        <motion.button
          className={styles.button}
          onClick={onOpenClaim}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
        >
          <span>Πάρε την #1 θέση με {nextPrice}€</span>
          <ArrowUpRight size={17} />
        </motion.button>
      </motion.div>
    </section>
  );
}