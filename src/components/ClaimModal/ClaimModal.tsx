'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock } from 'lucide-react';
import styles from './ClaimModal.module.scss';

interface ClaimModalProps {
  isOpen: boolean;
  nextPrice: number;
  onClose: () => void;
  onConfirmMock: (data: { name: string; handle?: string; message?: string }) => void;
}

export default function ClaimModal({
  isOpen,
  nextPrice,
  onClose,
  onConfirmMock,
}: ClaimModalProps) {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onConfirmMock({
      name: name.trim(),
      handle: handle.trim() || undefined,
      message: message.trim() || undefined,
    });

    setName('');
    setHandle('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h3>Κλείδωσε την #1 Θέση</h3>
                <p>Επόμενη τιμή: {nextPrice}€</p>
              </div>
              <button onClick={onClose} className={styles.closeBtn} aria-label="Κλείσιμο">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                <span>Όνομα ή Brand *</span>
                <input
                  type="text"
                  placeholder="π.χ. Ανδρέας Γ."
                  maxLength={28}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                <span>Instagram / TikTok / Website (προαιρετικό)</span>
                <input
                  type="text"
                  placeholder="π.χ. @username ή site.gr"
                  maxLength={40}
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </label>

              <label>
                <span>Μήνυμα στο Leaderboard (προαιρετικό)</span>
                <input
                  type="text"
                  placeholder="Γράψε κάτι για να σε θυμούνται..."
                  maxLength={65}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button type="submit" className={styles.submitBtn}>
                <Lock size={15} />
                <span>Πληρωμή {nextPrice}€ (Mock Preview)</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}