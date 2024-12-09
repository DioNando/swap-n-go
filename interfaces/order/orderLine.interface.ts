// OrderLine
export interface OrderLine {
  id: string; // UUID
  orderId: string; // UUID (relation avec Order)
  listingId: string; // UUID (relation avec Listing)
  quantity: number;
}
