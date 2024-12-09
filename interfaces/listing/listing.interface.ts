// Listing
export interface Listing {
  id: string; // UUID
  userId: string; // UUID (relation avec User)
  title: string;
  description: string;
  category: string;
  price: number; // Float
  isExchangeable: boolean;
  location: boolean;
  condition: "NEW" | "USED"; // Enum
  createdAt: Date; // DateTime
  updatedAt: Date; // DateTime
  status: "ACTIVE" | "SOLD" | "REMOVED"; // Enum
}
