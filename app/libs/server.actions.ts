"use server";
import { NextResponse } from "next/server";
import EventModel from "../models/event.model";
import dbConnect from "./db";

export async function createEvent(data: any) {
  await dbConnect();
  try {
    const newData = await EventModel.create(data);
    await newData.save();
    return {
      message: "Event created successfully",
      data: JSON.parse(JSON.stringify(newData)),
      status: 201,
    };
  } catch (error) {
    return {
      message: "Error creating event",
      error: error,
      status: 500,
    };
  }
}
