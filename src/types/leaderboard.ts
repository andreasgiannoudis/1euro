export interface LeaderboardEntry {
  id: string;
  position: number;      // 1, 2, 3... (ή αντίστροφη σειρά ανάλογα πώς θες να φαίνεται)
  name: string;
  handle?: string;       // π.χ. @username ή domain
  message?: string;      // Σύντομο σχόλιο (max 60 chars)
  amountPaid: number;    // Σε €
  createdAt: string;
}