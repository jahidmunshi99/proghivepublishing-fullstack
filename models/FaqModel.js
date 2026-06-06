import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  answer: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const FaqModel = mongoose.models.Faq || mongoose.model("Faq", FaqSchema);

export default FaqModel;
