"use server";
import connectMongo from "../dbConnect/connectMongo";
import FaqModel from "../models/FaqModel.js";

export const getFaqs = async () => {
  try {
    await connectMongo();
    const faqs = await FaqModel.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(faqs));
    return res;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
