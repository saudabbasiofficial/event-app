import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  price: {
    type: String,
  },
  websiteUrl: String,
  description: String,
});

// fix this code
const EventModel = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default EventModel;
