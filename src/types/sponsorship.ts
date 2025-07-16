// Sponsorship-related TypeScript interfaces and types

export interface SponsorshipFormData {
  sponsorshipType: string;
  sponsorshipPrice: string;
  sponsorshipCategory: string;
  companyName: string;
  contactPerson: string;
  designation?: string;
  email: string;
  phone: string;
  website?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  companyType?: CompanyType;
  industryType?: IndustryType;
  marketingObjectives?: string;
  previousSponsorships?: string;
  specialRequests?: string;
  agreedToTerms: boolean;
  subscribeNewsletter?: boolean;
}

export interface SponsorshipApplication extends SponsorshipFormData {
  _id: string;
  submissionDate: Date;
  status: SponsorshipStatus;
  notes?: string;
  followUpDate?: Date;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SponsorshipStatus =
  | "Pending"
  | "Under Review"
  | "Approved"
  | "Rejected"
  | "Completed";

export type CompanyType =
  | "Pharmaceutical Company"
  | "Biotechnology Company"
  | "Medical Device Company"
  | "Healthcare Service Provider"
  | "Research Institution"
  | "Academic Institution"
  | "Government Organization"
  | "Non-Profit Organization"
  | "Consulting Firm"
  | "Other";

export type IndustryType =
  | "Pharmaceuticals"
  | "Biotechnology"
  | "Medical Devices"
  | "Healthcare Services"
  | "Research & Development"
  | "Education"
  | "Government"
  | "Non-Profit"
  | "Consulting"
  | "Other";

export type SponsorshipCategory =
  | "Major Event Sponsorship"
  | "Material Sponsorship"
  | "Venue Sponsorship"
  | "Food Court Sponsorship"
  | "Scientific Sponsorship"
  | "Academic Sponsorship"
  | "Other Sponsorship"
  | "Souvenir Advertisement"
  | "Additional Opportunity";

export interface SponsorshipResponse {
  success: boolean;
  message: string;
  sponsorshipId?: string;
  data?: SponsorshipApplication;
  errors?: Record<string, string[]>;
}

export interface SponsorshipStats {
  total: number;
  pending: number;
  underReview: number;
  approved: number;
  rejected: number;
  completed: number;
  categoryCounts: Record<string, number>;
}

export interface SponsorshipListResponse {
  success: boolean;
  data: SponsorshipApplication[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SponsorshipFilters {
  page?: number;
  limit?: number;
  status?: SponsorshipStatus;
  category?: SponsorshipCategory;
  email?: string;
}

// Email template interfaces
export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
