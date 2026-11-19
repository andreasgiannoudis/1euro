'use client';

import Link from 'next/link';
import styles from './Header.module.scss';

interface HeaderProps {
  nextPrice?: number;
  onOpenClaim?: () => void;
}

export default function Header({ nextPrice, onOpenClaim }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          1euro<span>.gr</span>
        </Link>

        <nav className={styles.nav} aria-label="Κύρια πλοήγηση">
          <a href="#leaderboard" className={styles.navLink}>
            Κατάταξη
          </a>
          <a href="#how-it-works" className={styles.navLink}>
            Πώς λειτουργεί
          </a>
        </nav>

        <div className={styles.right}>
          {onOpenClaim && (
            <button onClick={onOpenClaim} className={styles.cta}>
              {nextPrice ? `Θέση #1 · ${nextPrice}€` : 'Συμμετοχή'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}