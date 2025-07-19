import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Sponsorship from "@/models/Sponsorship";

// GET - Get specific sponsorship application by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship ID is required",
        },
        { status: 400 }
      );
    }

    const sponsorship = await Sponsorship.findById(id).select("-__v");

    if (!sponsorship) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship application not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: sponsorship,
    });
  } catch (error) {
    console.error("Failed to fetch sponsorship:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch sponsorship application",
      },
      { status: 500 }
    );
  }
}

// PUT - Update sponsorship application (admin only)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;
    const updates = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship ID is required",
        },
        { status: 400 }
      );
    }

    // Only allow certain fields to be updated
    const allowedUpdates = ["status", "notes", "followUpDate", "assignedTo"];

    const filteredUpdates: any = {};
    Object.keys(updates).forEach((key) => {
      if (allowedUpdates.includes(key)) {
        filteredUpdates[key] = updates[key];
      }
    });

    const sponsorship = await Sponsorship.findByIdAndUpdate(
      id,
      filteredUpdates,
      {
        new: true,
        runValidators: true,
      }
    ).select("-__v");

    if (!sponsorship) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship application not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Sponsorship application updated successfully",
      data: sponsorship,
    });
  } catch (error) {
    console.error("Failed to update sponsorship:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update sponsorship application",
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete sponsorship application (admin only)
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship ID is required",
        },
        { status: 400 }
      );
    }

    const sponsorship = await Sponsorship.findByIdAndDelete(id);

    if (!sponsorship) {
      return NextResponse.json(
        {
          success: false,
          message: "Sponsorship application not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Sponsorship application deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete sponsorship:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete sponsorship application",
      },
      { status: 500 }
    );
  }
}
