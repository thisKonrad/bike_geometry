/* :::: API ID :::: */
/* import dbConnect from "@/db/connectDB";
import BikeGeometry from "@/db/models/BikeGeometry";


export default async function handler(request, response) {

    await dbConnect();
    const { id } = request.query;
    if (!id) return;

    console.log("id server", id);

    if (request.method === "GET") {
        const bike = await BikeGeometry.findById(id);
        console.log("note", bike);

        if (!bike) {
            return response.status(404).json({ status: "No bike found" });
        }
        response.status(200).json(bike);
    } */


    /*     if (request.method === "PUT") {
            await BikeGeometry.findByIdAndUpdate(id, {
                $set: request.body,
            });
            response.status(200).json({ status: `Bike updated!` });
        } */

    /*     if (request.method === "DELETE") {
            console.log("server id", id);
            await BikeGeometry.findByIdAndDelete(id);
            response.status(200).json({ status: `Bike deleted.` });
        } */
}