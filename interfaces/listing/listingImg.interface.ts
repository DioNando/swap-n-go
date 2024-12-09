// ListingImg
export interface ListingImg {
  id: string; // UUID
  listingId: string; // UUID (relation avec Listing)
  imageUrl: string;
}
