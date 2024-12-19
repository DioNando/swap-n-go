// User
export interface UserInterface {
  id: string; // UUID
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
  passwordConfirmation?: string;
  rating: number; // Float
  numberOfReviews: number;
  profilePictureUrl?: string;
}

export interface UserPayloadInterface {
  email: string;
  password: string;
}
