// Sponsorship API utility functions

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
  companyType?: string;
  industryType?: string;
  marketingObjectives?: string;
  previousSponsorships?: string;
  specialRequests?: string;
  agreedToTerms: boolean;
  subscribeNewsletter?: boolean;
}

export interface SponsorshipResponse {
  success: boolean;
  message: string;
  sponsorshipId?: string;
  data?: any;
  errors?: any;
}

export interface SponsorshipApplication {
  _id: string;
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
  companyType?: string;
  industryType?: string;
  marketingObjectives?: string;
  previousSponsorships?: string;
  specialRequests?: string;
  agreedToTerms: boolean;
  subscribeNewsletter: boolean;
  submissionDate: Date;
  status: "Pending" | "Under Review" | "Approved" | "Rejected" | "Completed";
  notes?: string;
  followUpDate?: Date;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Submit a new sponsorship application
 */
export async function submitSponsorshipApplication(
  formData: SponsorshipFormData
): Promise<SponsorshipResponse> {
  try {
    const response = await fetch("/api/sponsorship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to submit sponsorship application"
      );
    }

    return result;
  } catch (error) {
    console.error("Error submitting sponsorship:", error);
    throw error;
  }
}

/**
 * Get sponsorship application by ID
 */
export async function getSponsorshipApplication(
  id: string
): Promise<SponsorshipApplication> {
  try {
    const response = await fetch(`/api/sponsorship/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to fetch sponsorship application"
      );
    }

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching sponsorship:", error);
    throw error;
  }
}

/**
 * Get all sponsorship applications with filters (admin only)
 */
export async function getSponsorshipApplications(params?: {
  page?: number;
  limit?: number;
  status?: string;
  category?: string;
  email?: string;
}): Promise<{
  sponsorships: SponsorshipApplication[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}> {
  try {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.limit) searchParams.append("limit", params.limit.toString());
    if (params?.status) searchParams.append("status", params.status);
    if (params?.category) searchParams.append("category", params.category);
    if (params?.email) searchParams.append("email", params.email);

    const response = await fetch(
      `/api/sponsorship?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to fetch sponsorship applications"
      );
    }

    if (!result.success) {
      throw new Error(result.message);
    }

    return {
      sponsorships: result.data,
      pagination: result.pagination,
    };
  } catch (error) {
    console.error("Error fetching sponsorships:", error);
    throw error;
  }
}

/**
 * Update sponsorship application status (admin only)
 */
export async function updateSponsorshipApplication(
  id: string,
  updates: {
    status?: string;
    notes?: string;
    followUpDate?: Date;
    assignedTo?: string;
  }
): Promise<SponsorshipApplication> {
  try {
    const response = await fetch(`/api/sponsorship/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to update sponsorship application"
      );
    }

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } catch (error) {
    console.error("Error updating sponsorship:", error);
    throw error;
  }
}

/**
 * Delete sponsorship application (admin only)
 */
export async function deleteSponsorshipApplication(id: string): Promise<void> {
  try {
    const response = await fetch(`/api/sponsorship/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to delete sponsorship application"
      );
    }

    if (!result.success) {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error deleting sponsorship:", error);
    throw error;
  }
}

/**
 * Get sponsorship statistics (admin only)
 */
export async function getSponsorshipStats(): Promise<{
  total: number;
  pending: number;
  underReview: number;
  approved: number;
  rejected: number;
  completed: number;
  categoryCounts: Record<string, number>;
}> {
  try {
    const [allSponsorships] = await Promise.all([
      getSponsorshipApplications({ limit: 1000 }), // Get all sponsorships
    ]);

    const stats = {
      total: allSponsorships.sponsorships.length,
      pending: 0,
      underReview: 0,
      approved: 0,
      rejected: 0,
      completed: 0,
      categoryCounts: {} as Record<string, number>,
    };

    allSponsorships.sponsorships.forEach((sponsorship) => {
      // Count by status
      switch (sponsorship.status) {
        case "Pending":
          stats.pending++;
          break;
        case "Under Review":
          stats.underReview++;
          break;
        case "Approved":
          stats.approved++;
          break;
        case "Rejected":
          stats.rejected++;
          break;
        case "Completed":
          stats.completed++;
          break;
      }

      // Count by category
      const category = sponsorship.sponsorshipCategory;
      stats.categoryCounts[category] =
        (stats.categoryCounts[category] || 0) + 1;
    });

    return stats;
  } catch (error) {
    console.error("Error fetching sponsorship stats:", error);
    throw error;
  }
}
