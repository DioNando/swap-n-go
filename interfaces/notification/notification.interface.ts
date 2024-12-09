// Notification
export interface Notification {
  id: string; // UUID
  userId: string; // UUID (relation avec User)
  content: string;
  createdAt: Date; // DateTime
  isRead: boolean;
}
