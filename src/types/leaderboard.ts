export interface LeaderboardEntry {
  id: string;
  position: number;
  name: string;
  handle?: string;
  message?: string;
  amountPaid: number;
  clicks: number;
  claimedAtTimestamp: number;
  createdAt: string;
}