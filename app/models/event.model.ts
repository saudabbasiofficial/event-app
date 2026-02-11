import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
});
