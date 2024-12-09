// User
export interface UserInterface {
  id: string; // UUID
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  rating: number; // Float
  numberOfReviews: number;
  profilePictureUrl: string;
}
