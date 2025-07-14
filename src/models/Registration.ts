import mongoose, { Document, Schema } from "mongoose";

export interface IRegistration extends Document {
  _id: string;
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: "Male" | "Female" | "Other";

  // Professional Information
  category: string;
  institution: string;
  designation: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;

  // Registration Details
  registrationType: "Super Saver" | "Regular";
  isAPTIMember: boolean;
  aptiMembershipNumber?: string;

  // Additional Services
  accommodation: boolean;
  accompanying: number;
  dietaryRequirements?: string;

  // Payment Information
  paymentStatus: "Pending" | "Completed" | "Failed" | "Refunded";
  paymentAmount: number;
  paymentId?: string;
  orderId: string;
  cashfreeOrderId?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    // Personal Information
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },

    // Professional Information
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Students",
        "Delegates",
        "International Delegates",
        "Accompanying Person",
      ],
    },
    institution: {
      type: String,
      required: [true, "Institution is required"],
      trim: true,
      maxlength: [200, "Institution name cannot exceed 200 characters"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true,
      maxlength: [100, "Designation cannot exceed 100 characters"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      maxlength: [500, "Address cannot exceed 500 characters"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      maxlength: [100, "City name cannot exceed 100 characters"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
      maxlength: [100, "State name cannot exceed 100 characters"],
    },
    pincode: {
      type: String,
      required: [true, "Pincode is required"],
      match: [/^[0-9]{6}$/, "Please enter a valid 6-digit pincode"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
      maxlength: [100, "Country name cannot exceed 100 characters"],
    },

    // Registration Details
    registrationType: {
      type: String,
      required: [true, "Registration type is required"],
      enum: ["Super Saver", "Regular"],
    },
    isAPTIMember: {
      type: Boolean,
      default: false,
    },
    aptiMembershipNumber: {
      type: String,
      trim: true,
      maxlength: [50, "APTI membership number cannot exceed 50 characters"],
    },

    // Additional Services
    accommodation: {
      type: Boolean,
      default: false,
    },
    accompanying: {
      type: Number,
      default: 0,
      min: [0, "Accompanying persons cannot be negative"],
      max: [10, "Maximum 10 accompanying persons allowed"],
    },
    dietaryRequirements: {
      type: String,
      trim: true,
      maxlength: [500, "Dietary requirements cannot exceed 500 characters"],
    },

    // Payment Information
    paymentStatus: {
      type: String,
      required: [true, "Payment status is required"],
      enum: ["Pending", "Completed", "Failed", "Refunded"],
      default: "Pending",
    },
    paymentAmount: {
      type: Number,
      required: [true, "Payment amount is required"],
      min: [0, "Payment amount cannot be negative"],
    },
    paymentId: {
      type: String,
      trim: true,
    },
    orderId: {
      type: String,
      required: [true, "Order ID is required"],
      trim: true,
    },
    cashfreeOrderId: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries and uniqueness
RegistrationSchema.index({ email: 1 }, { unique: true });
RegistrationSchema.index({ orderId: 1 }, { unique: true });
RegistrationSchema.index({ paymentStatus: 1 });
RegistrationSchema.index({ createdAt: -1 });

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegistrationSchema);
