// Conference related types
export interface ConferenceInfo {
  name: string
  edition: string
  year: number
  theme: string
  startDate: Date
  endDate: Date
  venue: Venue
  expectedAttendees: number
  countries: number
}

export interface Venue {
  name: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

// Speaker related types
export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  expertise: string[]
  location: string
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  type: 'keynote' | 'featured' | 'panelist' | 'workshop'
}

// Session related types
export interface Session {
  id: string
  title: string
  description: string
  type: SessionType
  track: Track
  startTime: Date
  endTime: Date
  venue: string
  speakers: Speaker[]
  capacity: number
  isWorkshop: boolean
  registrationRequired: boolean
}

export type SessionType = 
  | 'keynote'
  | 'panel'
  | 'presentation'
  | 'workshop'
  | 'networking'
  | 'break'
  | 'social'

export type Track = 
  | 'research'
  | 'regulatory'
  | 'manufacturing'
  | 'clinical'
  | 'market'
  | 'general'

// Registration related types
export interface RegistrationPackage {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  features: string[]
  isPopular: boolean
  isEarlyBird: boolean
  validUntil: Date
}

export interface RegistrationForm {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    title: string
    organization: string
    designation: string
    address: Address
  }
  packageId: string
  sessions: string[]
  dietaryRestrictions: string
  specialRequests: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  paymentInfo: {
    method: PaymentMethod
    billingAddress: Address
  }
}

export interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export type PaymentMethod = 'credit_card' | 'debit_card' | 'net_banking' | 'upi' | 'bank_transfer'

// Sponsor related types
export interface Sponsor {
  id: string
  name: string
  logo: string
  website: string
  tier: SponsorTier
  description: string
  benefits: string[]
}

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'startup'

export interface SponsorshipPackage {
  id: string
  name: string
  tier: SponsorTier
  price: number
  benefits: string[]
  maxSponsors: number
  currentSponsors: number
}

// Contact related types
export interface ContactForm {
  name: string
  email: string
  organization: string
  phone: string
  subject: string
  message: string
  inquiryType: InquiryType
}

export type InquiryType = 
  | 'general'
  | 'registration'
  | 'speakers'
  | 'sponsorship'
  | 'media'
  | 'accommodation'
  | 'technical'

export interface ContactInfo {
  name: string
  title: string
  email: string
  phone: string
  department: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form validation types
export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

// Navigation types
export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType
  children?: NavigationItem[]
}

// Theme types
export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  fonts: {
    heading: string
    body: string
  }
}

// Event types
export interface ConferenceEvent {
  id: string
  title: string
  description: string
  date: Date
  location: string
  type: 'pre-conference' | 'main-conference' | 'post-conference'
  isPublic: boolean
  registrationRequired: boolean
  capacity: number
}