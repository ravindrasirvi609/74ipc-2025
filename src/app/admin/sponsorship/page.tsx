"use client";

import { useState, useEffect } from "react";
import {
  getSponsorshipApplications,
  getSponsorshipStats,
  updateSponsorshipApplication,
  SponsorshipApplication,
} from "@/lib/sponsorship";

export default function SponsorshipAdminPage() {
  const [sponsorships, setSponsorships] = useState<SponsorshipApplication[]>(
    []
  );
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const filters: any = {};
        if (selectedStatus !== "all") filters.status = selectedStatus;
        if (selectedCategory !== "all") filters.category = selectedCategory;

        const [sponsorshipData, statsData] = await Promise.all([
          getSponsorshipApplications(filters),
          getSponsorshipStats(),
        ]);

        setSponsorships(sponsorshipData.sponsorships);
        setStats(statsData);
      } catch (error) {
        console.error("Error loading data:", error);
        alert("Error loading sponsorship data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedStatus, selectedCategory]);

  const refreshData = async () => {
    try {
      setLoading(true);

      const filters: any = {};
      if (selectedStatus !== "all") filters.status = selectedStatus;
      if (selectedCategory !== "all") filters.category = selectedCategory;

      const [sponsorshipData, statsData] = await Promise.all([
        getSponsorshipApplications(filters),
        getSponsorshipStats(),
      ]);

      setSponsorships(sponsorshipData.sponsorships);
      setStats(statsData);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Error loading sponsorship data");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (
    sponsorshipId: string,
    newStatus: string
  ) => {
    try {
      await updateSponsorshipApplication(sponsorshipId, { status: newStatus });
      await refreshData(); // Reload data
      alert("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading sponsorship data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sponsorship Applications Admin
        </h1>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Pending</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">
                Under Review
              </h3>
              <p className="text-2xl font-bold text-blue-600">
                {stats.underReview}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Approved</h3>
              <p className="text-2xl font-bold text-green-600">
                {stats.approved}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Rejected</h3>
              <p className="text-2xl font-bold text-red-600">
                {stats.rejected}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Completed</h3>
              <p className="text-2xl font-bold text-purple-600">
                {stats.completed}
              </p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Under Review">Under Review</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="Major Event Sponsorship">
                  Major Event Sponsorship
                </option>
                <option value="Material Sponsorship">
                  Material Sponsorship
                </option>
                <option value="Venue Sponsorship">Venue Sponsorship</option>
                <option value="Food Court Sponsorship">
                  Food Court Sponsorship
                </option>
                <option value="Scientific Sponsorship">
                  Scientific Sponsorship
                </option>
                <option value="Academic Sponsorship">
                  Academic Sponsorship
                </option>
                <option value="Other Sponsorship">Other Sponsorship</option>
                <option value="Souvenir Advertisement">
                  Souvenir Advertisement
                </option>
                <option value="Additional Opportunity">
                  Additional Opportunity
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Sponsorship Applications Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Sponsorship Applications ({sponsorships.length})
            </h2>
          </div>

          {sponsorships.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No sponsorship applications found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sponsorship
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sponsorships.map((sponsorship) => (
                    <tr key={sponsorship._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {sponsorship.companyName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {sponsorship.companyType}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {sponsorship.contactPerson}
                          </div>
                          <div className="text-sm text-gray-500">
                            {sponsorship.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {sponsorship.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {sponsorship.sponsorshipType}
                          </div>
                          <div className="text-sm text-gray-500">
                            {sponsorship.sponsorshipCategory}
                          </div>
                          <div className="text-sm font-medium text-green-600">
                            {sponsorship.sponsorshipPrice}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={sponsorship.status}
                          onChange={(e) =>
                            handleStatusChange(sponsorship._id, e.target.value)
                          }
                          className={`text-sm px-2 py-1 rounded-full border ${
                            sponsorship.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                              : sponsorship.status === "Under Review"
                                ? "bg-blue-100 text-blue-800 border-blue-300"
                                : sponsorship.status === "Approved"
                                  ? "bg-green-100 text-green-800 border-green-300"
                                  : sponsorship.status === "Rejected"
                                    ? "bg-red-100 text-red-800 border-red-300"
                                    : "bg-purple-100 text-purple-800 border-purple-300"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(
                          sponsorship.submissionDate
                        ).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            const details = `
Company: ${sponsorship.companyName}
Contact: ${sponsorship.contactPerson} (${sponsorship.email})
Phone: ${sponsorship.phone}
Sponsorship: ${sponsorship.sponsorshipType} - ${sponsorship.sponsorshipPrice}
Category: ${sponsorship.sponsorshipCategory}
Address: ${sponsorship.address}, ${sponsorship.city}, ${sponsorship.state}, ${sponsorship.country}
${sponsorship.marketingObjectives ? `Marketing Objectives: ${sponsorship.marketingObjectives}` : ""}
${sponsorship.specialRequests ? `Special Requests: ${sponsorship.specialRequests}` : ""}
Status: ${sponsorship.status}
Submitted: ${new Date(sponsorship.submissionDate).toLocaleString()}
                            `;
                            alert(details);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
