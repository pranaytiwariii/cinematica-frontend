export interface Space {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  price: number;
  image: string;
  gallery?: string[];
  rating: number;
  location: string;
  categories: string[];
  hostId: number;
  amenities?: string[];
  availableDates: Date[];
  availableTimeSlots: string[];
}