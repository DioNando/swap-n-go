// Order
export interface Order {
  id: string; // UUID
  userId: string; // UUID (relation avec User)
  createdAt: Date; // DateTime
  updatedAt: Date; // DateTime
  totalAmount: number; // Float
  status: "PENDING" | "CONFIRMED" | "SHIPPED" | "CANCELLED"; // Enum
}
