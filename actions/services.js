import connectMongo from "../dbConnect/connectMongo.js";
import Services from "../models/Service.js";

// Fetch Data from DB
export const GetServices = async () => {
  try {
    await connectMongo();
    const data = await Services.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (error) {
    console.log(error);
  }
};
