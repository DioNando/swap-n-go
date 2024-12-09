// Transaction
export interface Transaction {
  id: string; // UUID
  orderId: string; // UUID (relation avec Order)
  buyerId: string; // UUID (relation avec User)
  sellerId: string; // UUID (relation avec User)
  transactionType: "SALE" | "EXCHANGE"; // Enum
  createdAt: Date; // DateTime
  updatedAt: Date; // DateTime
  paymentMethod: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED"; // Enum
}
