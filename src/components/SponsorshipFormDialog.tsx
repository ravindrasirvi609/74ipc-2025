"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Send, Building, Mail, Phone, User, Globe } from "lucide-react";
import {
  submitSponsorshipApplication,
  SponsorshipFormData,
} from "@/lib/sponsorship";
interface SponsorshipFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  sponsorshipType: string;
  sponsorshipPrice: string;
  sponsorshipCategory: string;
}
interface FormData {
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  companyType: string;
  industryType: string;
  marketingObjectives: string;
  previousSponsorships: string;
  specialRequests: string;
  agreedToTerms: boolean;
  subscribeNewsletter: boolean;
}
const initialFormData: FormData = {
  companyName: "",
  contactPerson: "",
  designation: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  city: "",
  state: "",
  country: "India",
  companyType: "",
  industryType: "",
  marketingObjectives: "",
  previousSponsorships: "",
  specialRequests: "",
  agreedToTerms: false,
  subscribeNewsletter: false,
};
const companyTypes = [
  "Pharmaceutical Company",
  "Biotechnology Company",
  "Medical Device Company",
  "Healthcare Service Provider",
  "Research Institution",
  "Academic Institution",
  "Government Organization",
  "Non-Profit Organization",
  "Consulting Firm",
  "Other",
];
const industryTypes = [
  "Pharmaceuticals",
  "Biotechnology",
  "Medical Devices",
  "Healthcare Services",
  "Research & Development",
  "Education",
  "Government",
  "Non-Profit",
  "Consulting",
  "Other",
];
export default function SponsorshipFormDialog({
  isOpen,
  onClose,
  sponsorshipType,
  sponsorshipPrice,
  sponsorshipCategory,
}: SponsorshipFormDialogProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data for API submission
      const submissionData: SponsorshipFormData = {
        ...formData,
        sponsorshipType,
        sponsorshipPrice,
        sponsorshipCategory,
      };

      // Submit using the utility function
      const result = await submitSponsorshipApplication(submissionData);

      if (result.success) {
        // Reset form and close dialog
        setFormData(initialFormData);
        setCurrentStep(1);
        onClose();

        // Show success message
        alert(
          `Sponsorship application submitted successfully!\n\nApplication ID: ${result.sponsorshipId}\n\nWe will contact you within 2-3 business days to discuss the next steps.\n\nThank you for your interest in partnering with us!`
        );
      }
    } catch (error) {
      console.error("Error submitting sponsorship application:", error);

      let errorMessage =
        "Failed to submit sponsorship application. Please try again.";

      if (error instanceof Error) {
        if (error.message.includes("already pending")) {
          errorMessage =
            "A sponsorship application from your company is already pending or approved. Please contact us for updates.";
        } else if (error.message.includes("Validation failed")) {
          errorMessage = "Please check your form data and try again.";
        } else {
          errorMessage = error.message;
        }
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.companyName &&
          formData.contactPerson &&
          formData.email &&
          formData.phone
        );
      case 2:
        return (
          formData.address &&
          formData.city &&
          formData.state &&
          formData.country
        );
      case 3:
        return formData.agreedToTerms;
      default:
        return false;
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {" "}
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl">
        {" "}
        <DialogHeader>
          {" "}
          <div className="flex items-center justify-between">
            {" "}
            <div>
              {" "}
              <DialogTitle className="text-2xl font-bold text-blue-600">
                {" "}
                Sponsorship Application{" "}
              </DialogTitle>{" "}
              <DialogDescription className="text-lg mt-2">
                {" "}
                <span className="font-semibold">{sponsorshipType}</span> -{" "}
                {sponsorshipPrice} <br />{" "}
                <span className="text-sm text-gray-600">
                  Category: {sponsorshipCategory}
                </span>{" "}
              </DialogDescription>{" "}
            </div>{" "}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-gray-100"
            >
              {" "}
              <X className="h-4 w-4" />{" "}
            </Button>{" "}
          </div>{" "}
        </DialogHeader>{" "}
        {/* Progress Bar */}{" "}
        <div className="mb-6">
          {" "}
          <div className="flex items-center justify-between mb-2">
            {" "}
            <span className="text-sm font-medium text-gray-600">
              {" "}
              Step {currentStep} of {totalSteps}{" "}
            </span>{" "}
            <span className="text-sm text-gray-600">
              {" "}
              {Math.round((currentStep / totalSteps) * 100)}% Complete{" "}
            </span>{" "}
          </div>{" "}
          <div className="w-full bg-gray-200 rounded-full h-2">
            {" "}
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>{" "}
          </div>{" "}
        </div>{" "}
        <form onSubmit={handleSubmit} className="space-y-6">
          {" "}
          {/* Step 1: Company & Contact Information */}{" "}
          {currentStep === 1 && (
            <div className="space-y-4">
              {" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                {" "}
                <Building className="h-5 w-5" /> Company & Contact
                Information{" "}
              </h3>{" "}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="companyName" className="text-gray-700">
                    Company Name *
                  </Label>{" "}
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    placeholder="Enter company name"
                    required
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="website" className="text-gray-700">
                    Website
                  </Label>{" "}
                  <div className="relative mt-1">
                    {" "}
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{" "}
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("website", e.target.value)
                      }
                      placeholder="https://www.company.com"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="contactPerson" className="text-gray-700">
                    Contact Person *
                  </Label>{" "}
                  <div className="relative mt-1">
                    {" "}
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{" "}
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      placeholder="Full name"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="designation" className="text-gray-700">
                    Designation
                  </Label>{" "}
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("designation", e.target.value)
                    }
                    placeholder="Job title/designation"
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address *
                  </Label>{" "}
                  <div className="relative mt-1">
                    {" "}
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{" "}
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="email@company.com"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number *
                  </Label>{" "}
                  <div className="relative mt-1">
                    {" "}
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />{" "}
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+91 12345 67890"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="companyType" className="text-gray-700">
                    Company Type
                  </Label>{" "}
                  <Select
                    value={formData.companyType}
                    onValueChange={(value: string) =>
                      handleInputChange("companyType", value)
                    }
                  >
                    {" "}
                    <SelectTrigger className="mt-1 border-gray-300">
                      {" "}
                      <SelectValue placeholder="Select company type" />{" "}
                    </SelectTrigger>{" "}
                    <SelectContent>
                      {" "}
                      {companyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {" "}
                          {type}{" "}
                        </SelectItem>
                      ))}{" "}
                    </SelectContent>{" "}
                  </Select>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="industryType" className="text-gray-700">
                    Industry Type
                  </Label>{" "}
                  <Select
                    value={formData.industryType}
                    onValueChange={(value: string) =>
                      handleInputChange("industryType", value)
                    }
                  >
                    {" "}
                    <SelectTrigger className="mt-1 border-gray-300">
                      {" "}
                      <SelectValue placeholder="Select industry type" />{" "}
                    </SelectTrigger>{" "}
                    <SelectContent>
                      {" "}
                      {industryTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {" "}
                          {type}{" "}
                        </SelectItem>
                      ))}{" "}
                    </SelectContent>{" "}
                  </Select>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {/* Step 2: Address Information */}{" "}
          {currentStep === 2 && (
            <div className="space-y-4">
              {" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {" "}
                Address Information{" "}
              </h3>{" "}
              <div>
                {" "}
                <Label htmlFor="address" className="text-gray-700">
                  Complete Address *
                </Label>{" "}
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("address", e.target.value)
                  }
                  placeholder="Enter complete address"
                  rows={3}
                  required
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />{" "}
              </div>{" "}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="city" className="text-gray-700">
                    City *
                  </Label>{" "}
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("city", e.target.value)
                    }
                    placeholder="Enter city"
                    required
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="state" className="text-gray-700">
                    State *
                  </Label>{" "}
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("state", e.target.value)
                    }
                    placeholder="Enter state"
                    required
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <Label htmlFor="country" className="text-gray-700">
                  Country *
                </Label>{" "}
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("country", e.target.value)
                  }
                  placeholder="Enter country"
                  required
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />{" "}
              </div>{" "}
            </div>
          )}{" "}
          {/* Step 3: Sponsorship Details & Agreement */}{" "}
          {currentStep === 3 && (
            <div className="space-y-4">
              {" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {" "}
                Sponsorship Details & Additional Information{" "}
              </h3>{" "}
              <div>
                {" "}
                <Label htmlFor="marketingObjectives" className="text-gray-700">
                  Marketing Objectives
                </Label>{" "}
                <Textarea
                  id="marketingObjectives"
                  value={formData.marketingObjectives}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("marketingObjectives", e.target.value)
                  }
                  placeholder="Describe your marketing objectives and goals for this sponsorship"
                  rows={3}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <Label htmlFor="previousSponsorships" className="text-gray-700">
                  Previous IPC Sponsorships
                </Label>{" "}
                <Textarea
                  id="previousSponsorships"
                  value={formData.previousSponsorships}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("previousSponsorships", e.target.value)
                  }
                  placeholder="Please mention any previous sponsorships with IPC (if any)"
                  rows={2}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <Label htmlFor="specialRequests" className="text-gray-700">
                  Special Requests
                </Label>{" "}
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("specialRequests", e.target.value)
                  }
                  placeholder="Any special requirements or custom requests"
                  rows={3}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />{" "}
              </div>{" "}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                {" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <Checkbox
                    id="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked: boolean) =>
                      handleInputChange("agreedToTerms", checked)
                    }
                  />{" "}
                  <Label
                    htmlFor="agreedToTerms"
                    className="text-sm text-gray-700"
                  >
                    {" "}
                    I agree to the{" "}
                    <a
                      href="/terms-of-service"
                      className="text-blue-600 hover:underline"
                    >
                      {" "}
                      Terms of Service{" "}
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 hover:underline"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                    *{" "}
                  </Label>{" "}
                </div>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <Checkbox
                    id="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked: boolean) =>
                      handleInputChange("subscribeNewsletter", checked)
                    }
                  />{" "}
                  <Label
                    htmlFor="subscribeNewsletter"
                    className="text-sm text-gray-700"
                  >
                    {" "}
                    Subscribe to IPC newsletter for updates and future
                    events{" "}
                  </Label>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {/* Navigation Buttons */}{" "}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            {" "}
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {" "}
              Previous{" "}
            </Button>{" "}
            <div className="flex gap-2">
              {" "}
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {" "}
                  Next{" "}
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepValid() || isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {" "}
                  {isSubmitting ? (
                    <>
                      {" "}
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>{" "}
                      Submitting...{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <Send className="h-4 w-4 mr-2" /> Submit Application{" "}
                    </>
                  )}{" "}
                </Button>
              )}{" "}
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </DialogContent>{" "}
    </Dialog>
  );
}
