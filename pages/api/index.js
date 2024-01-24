/* :::: API :::: */
import BikeGeometry from "@/db/models/BikeGeometry.js";
import dbConnect from "@/db/connectDB.js";


export default async function handler(request, response) {

  await dbConnect();
  console.log('Hi from Server!')

  if (request.method === "POST") {
    try {
      const bikeData = request.body;
      //const bike = new BikeGeometry(bikeData);
      await BikeGeometry.create(bikeData);
      response.status(201).json({ status: "Bike Created" });
    } catch (e) {
      console.error(e);
      response.status(400).json({ error: e.message });
    }
  }

  if (request.method === "GET") {
    const bikes = await BikeGeometry.find();
    return response.status(200).json(bikes);
  }

}