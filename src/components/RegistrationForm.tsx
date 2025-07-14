"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building2,
  CreditCard,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

// Form validation schema
const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  category: z.enum([
    "Students",
    "Delegates",
    "International Delegates",
    "Accompanying Person",
  ]),
  institution: z.string().min(1, "Institution is required").max(200),
  designation: z.string().min(1, "Designation is required").max(100),
  address: z.string().min(1, "Address is required").max(500),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, "Please enter a valid 6-digit pincode"),
  country: z.string().min(1, "Country is required").max(100),
  registrationType: z.enum(["Super Saver", "Regular"]),
  isAPTIMember: z.boolean(),
  aptiMembershipNumber: z.string().optional(),
  accommodation: z.boolean(),
  accompanying: z.number().min(0).max(10),
  dietaryRequirements: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface PricingInfo {
  [key: string]: {
    "Super Saver": { base: number; withGST: number };
    Regular: { base: number; withGST: number };
  };
}

const pricingInfo: PricingInfo = {
  Students: {
    "Super Saver": { base: 4000, withGST: 4720 },
    Regular: { base: 4500, withGST: 5310 },
  },
  Delegates: {
    "Super Saver": { base: 8000, withGST: 9440 },
    Regular: { base: 9000, withGST: 10620 },
  },
  "International Delegates": {
    "Super Saver": { base: 15000, withGST: 17700 },
    Regular: { base: 18000, withGST: 21240 },
  },
  "Accompanying Person": {
    "Super Saver": { base: 5000, withGST: 5900 },
    Regular: { base: 6000, withGST: 7080 },
  },
};

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      isAPTIMember: false,
      accommodation: false,
      accompanying: 0,
      country: "India",
    },
  });

  // Watch form values for dynamic pricing
  const watchedValues = watch();
  const {
    category,
    registrationType,
    isAPTIMember,
    accommodation,
    accompanying,
  } = watchedValues;

  // Calculate total amount
  const calculateTotalAmount = () => {
    if (!category || !registrationType) return 0;

    const categoryPricing = pricingInfo[category];
    if (!categoryPricing) return 0;

    const typePricing = categoryPricing[registrationType];
    let total = typePricing.withGST;

    // Apply APTI member discount (10% off base price)
    if (isAPTIMember) {
      const discountAmount = typePricing.base * 0.1;
      total = typePricing.withGST - discountAmount * 1.18;
    }

    // Add accommodation charges
    if (accommodation) {
      total += 3000;
    }

    // Add accompanying person charges
    if (accompanying > 0) {
      total += accompanying * 2000;
    }

    return Math.round(total);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const totalAmount = calculateTotalAmount();

      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          paymentAmount: totalAmount,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      // Redirect to Cashfree payment page
      if (result.data.paymentUrl) {
        window.location.href = result.data.paymentUrl;
      } else {
        // Fallback: show success message
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An error occurred during registration"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Registration Successful!
        </h2>
        <p className="text-gray-600">
          Your registration has been submitted successfully. You will receive a
          confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pharmaceutical-600 to-primary-700 px-8 py-6">
        <h2 className="text-3xl font-bold text-white">Registration Form</h2>
        <p className="text-pharmaceutical-100 mt-2">
          74th Indian Pharmaceutical Congress 2025
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
        {/* Personal Information */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-pharmaceutical-600" />
            Personal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                {...register("lastName")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                  placeholder="10-digit phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  {...register("dateOfBirth")}
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                />
              </div>
              {errors.dateOfBirth && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                {...register("gender")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Professional Information */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-pharmaceutical-600" />
            Professional Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                {...register("category")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
              >
                <option value="">Select Category</option>
                <option value="Students">Students</option>
                <option value="Delegates">Delegates</option>
                <option value="International Delegates">
                  International Delegates
                </option>
                <option value="Accompanying Person">Accompanying Person</option>
              </select>
              {errors.category && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Type *
              </label>
              <select
                {...register("registrationType")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
              >
                <option value="">Select Type</option>
                <option value="Super Saver">Super Saver</option>
                <option value="Regular">Regular</option>
              </select>
              {errors.registrationType && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.registrationType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                {...register("institution")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your institution"
              />
              {errors.institution && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.institution.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation *
              </label>
              <input
                {...register("designation")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your designation"
              />
              {errors.designation && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.designation.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-pharmaceutical-600" />
            Address Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                {...register("address")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                {...register("city")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <input
                {...register("state")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your state"
              />
              {errors.state && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pincode *
              </label>
              <input
                {...register("pincode")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="6-digit pincode"
              />
              {errors.pincode && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                {...register("country")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Enter your country"
              />
              {errors.country && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* APTI Membership */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            APTI Membership
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                {...register("isAPTIMember")}
                type="checkbox"
                className="h-4 w-4 text-pharmaceutical-600 focus:ring-pharmaceutical-500 border-gray-300 rounded"
                onChange={(e) => {
                  setValue("isAPTIMember", e.target.checked);
                  if (!e.target.checked) {
                    setValue("aptiMembershipNumber", "");
                  }
                }}
              />
              <label className="ml-2 block text-sm text-gray-900">
                I am an APTI member (10% discount applicable)
              </label>
            </div>

            {watchedValues.isAPTIMember && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  APTI Membership Number
                </label>
                <input
                  {...register("aptiMembershipNumber")}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                  placeholder="Enter your APTI membership number"
                />
              </div>
            )}
          </div>
        </section>

        {/* Additional Services */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Additional Services
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                {...register("accommodation")}
                type="checkbox"
                className="h-4 w-4 text-pharmaceutical-600 focus:ring-pharmaceutical-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Accommodation required (+₹3,000)
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Accompanying Persons (₹2,000 per person)
              </label>
              <input
                {...register("accompanying", { valueAsNumber: true })}
                type="number"
                min="0"
                max="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="0"
              />
              {errors.accompanying && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.accompanying.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Requirements (Optional)
              </label>
              <textarea
                {...register("dietaryRequirements")}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500"
                placeholder="Any special dietary requirements"
              />
            </div>
          </div>
        </section>

        {/* Payment Summary */}
        {category && registrationType && (
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-pharmaceutical-600" />
              Payment Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>
                  Registration ({category} - {registrationType})
                </span>
                <span>
                  ₹
                  {pricingInfo[category][
                    registrationType
                  ].withGST.toLocaleString()}
                </span>
              </div>
              {isAPTIMember && (
                <div className="flex justify-between text-green-600">
                  <span>APTI Member Discount (10%)</span>
                  <span>
                    -₹
                    {Math.round(
                      pricingInfo[category][registrationType].base * 0.1 * 1.18
                    ).toLocaleString()}
                  </span>
                </div>
              )}
              {accommodation && (
                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span>₹3,000</span>
                </div>
              )}
              {accompanying > 0 && (
                <div className="flex justify-between">
                  <span>Accompanying Persons ({accompanying})</span>
                  <span>₹{(accompanying * 2000).toLocaleString()}</span>
                </div>
              )}
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>₹{calculateTotalAmount().toLocaleString()}</span>
              </div>
            </div>
          </section>
        )}

        {/* Submit Button */}
        <div className="text-center">
          {submitError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-700">{submitError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-pharmaceutical-600 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing Registration...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment (₹{calculateTotalAmount().toLocaleString()})
              </>
            )}
          </button>

          <p className="text-sm text-gray-600 mt-4">
            You will be redirected to Cashfree secure payment gateway
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
