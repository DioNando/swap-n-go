// User
export interface UserInterface {
  id: string; // UUID
  name: string;
  email: string;
  phoneNumber: string;
  rating: number; // Float
  numberOfReviews: number;
  profilePictureUrl?: string;
}
