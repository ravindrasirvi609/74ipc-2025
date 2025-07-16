import mongoose, { Document, Schema } from "mongoose";

export interface ISponsorship extends Document {
  _id: string;

  // Sponsorship Selection
  sponsorshipType: string;
  sponsorshipPrice: string;
  sponsorshipCategory: string;

  // Company Information
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  website?: string;

  // Address Information
  address: string;
  city: string;
  state: string;
  country: string;

  // Company Details
  companyType: string;
  industryType: string;

  // Sponsorship Details
  marketingObjectives?: string;
  previousSponsorships?: string;
  specialRequests?: string;

  // Agreements
  agreedToTerms: boolean;
  subscribeNewsletter: boolean;

  // Metadata
  submissionDate: Date;
  status: "Pending" | "Under Review" | "Approved" | "Rejected" | "Completed";
  notes?: string;
  followUpDate?: Date;
  assignedTo?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const SponsorshipSchema: Schema<ISponsorship> = new Schema(
  {
    // Sponsorship Selection
    sponsorshipType: {
      type: String,
      required: [true, "Sponsorship type is required"],
      trim: true,
    },
    sponsorshipPrice: {
      type: String,
      required: [true, "Sponsorship price is required"],
      trim: true,
    },
    sponsorshipCategory: {
      type: String,
      required: [true, "Sponsorship category is required"],
      trim: true,
    },

    // Company Information
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [200, "Company name cannot exceed 200 characters"],
    },
    contactPerson: {
      type: String,
      required: [true, "Contact person is required"],
      trim: true,
      maxlength: [100, "Contact person name cannot exceed 100 characters"],
    },
    designation: {
      type: String,
      trim: true,
      maxlength: [100, "Designation cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
    },
    website: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        "Please enter a valid website URL",
      ],
    },

    // Address Information
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
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
      maxlength: [100, "Country name cannot exceed 100 characters"],
      default: "India",
    },

    // Company Details
    companyType: {
      type: String,
      enum: [
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
      ],
      trim: true,
    },
    industryType: {
      type: String,
      enum: [
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
      ],
      trim: true,
    },

    // Sponsorship Details
    marketingObjectives: {
      type: String,
      trim: true,
      maxlength: [1000, "Marketing objectives cannot exceed 1000 characters"],
    },
    previousSponsorships: {
      type: String,
      trim: true,
      maxlength: [1000, "Previous sponsorships cannot exceed 1000 characters"],
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: [1000, "Special requests cannot exceed 1000 characters"],
    },

    // Agreements
    agreedToTerms: {
      type: Boolean,
      required: [true, "You must agree to the terms and conditions"],
      validate: {
        validator: function (v: boolean) {
          return v === true;
        },
        message: "You must agree to the terms and conditions",
      },
    },
    subscribeNewsletter: {
      type: Boolean,
      default: false,
    },

    // Metadata
    submissionDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Pending", "Under Review", "Approved", "Rejected", "Completed"],
      default: "Pending",
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [2000, "Notes cannot exceed 2000 characters"],
    },
    followUpDate: {
      type: Date,
    },
    assignedTo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete (ret as any)._id;
        delete (ret as any).__v;
        return ret;
      },
    },
  }
);

// Indexes for better query performance
SponsorshipSchema.index({ email: 1 });
SponsorshipSchema.index({ companyName: 1 });
SponsorshipSchema.index({ status: 1 });
SponsorshipSchema.index({ sponsorshipCategory: 1 });
SponsorshipSchema.index({ submissionDate: -1 });
SponsorshipSchema.index({ createdAt: -1 });

// Compound indexes
SponsorshipSchema.index({ sponsorshipCategory: 1, status: 1 });
SponsorshipSchema.index({ email: 1, companyName: 1 });

// Pre-save middleware to set submission date
SponsorshipSchema.pre("save", function (next) {
  if (this.isNew) {
    this.submissionDate = new Date();
  }
  next();
});

// Instance methods
SponsorshipSchema.methods.toJSON = function () {
  const sponsorshipObject = this.toObject();
  delete sponsorshipObject.__v;
  return sponsorshipObject;
};

// Static methods
SponsorshipSchema.statics.findByEmail = function (email: string) {
  return this.find({ email: email.toLowerCase() });
};

SponsorshipSchema.statics.findByCategory = function (category: string) {
  return this.find({ sponsorshipCategory: category });
};

SponsorshipSchema.statics.findByStatus = function (status: string) {
  return this.find({ status });
};

// Export the model
const Sponsorship =
  mongoose.models.Sponsorship ||
  mongoose.model<ISponsorship>("Sponsorship", SponsorshipSchema);

export default Sponsorship;
