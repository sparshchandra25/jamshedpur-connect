export interface Pro {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  neighborhood: string;
  experience: number;
  bio: string;
  avatarUrl: string;
  startingPrice: number;
  phone: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  popularTags: string[];
  startingPrice: number;
  label?: 'Most Booked' | 'New' | null;
  iconName: string;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
  neighborhood: string;
  avatarUrl: string;
  isHighlighted?: boolean;
}

export interface NeighborhoodInfo {
  id: string;
  name: string;
  description: string;
  iconName: 'tree' | 'factory' | 'mountain' | 'shop';
}

export interface BookingState {
  isOpen: boolean;
  step: 'details' | 'neighborhood' | 'schedule' | 'contact' | 'submitting' | 'confirmed';
  selectedService: string;
  selectedPro?: Pro;
  neighborhood: string;
  address: string;
  date: string;
  timeSlot: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  notes: string;
}

export interface ProviderRegistrationState {
  isOpen: boolean;
  step: 'basic' | 'trade' | 'experience' | 'submitted';
  name: string;
  phone: string;
  email: string;
  neighborhood: string;
  trade: string;
  experience: number;
  certifications: boolean;
}
