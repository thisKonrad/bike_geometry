/* :::: API :::: */
import BikeGeometry from "@/db/models/BikeGeometry.js";
import dbConnect from "@/db/connectDB.js";


export default async function handler(request, response) {
  await dbConnect();
  console.log('Hi from Server!')

  if (request.method === "GET") {
    const bikes = await BikeGeometry.find();
    console.log('Response: ', response)
    return response.status(200).json(bikes);
  }

  if (request.method === "POST") {
    try {
      console.log('Request Body: ', request.body);
      const bikeData = request.body;
      //const bike = new BikeGeometry(bikeData);
      await BikeGeometry.create(bikeData);
      response.status(201).json({ status: "Bike Created" });
    } catch (e) {
      console.error(e);
      response.status(400).json({ error: e.message });
    }
  }
}