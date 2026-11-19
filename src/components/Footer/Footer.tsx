import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.brand}>PANO.gr</span>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Με επιφύλαξη παντός δικαιώματος.
          </span>
        </div>

        <nav className={styles.links} aria-label="Footer πλοήγηση">
          <Link href="/terms">Όροι Χρήσης</Link>
          <Link href="/privacy">Απόρρητο</Link>
          <a href="mailto:hello@pano.gr">Επικοινωνία</a>
        </nav>
      </div>
    </footer>
  );
}