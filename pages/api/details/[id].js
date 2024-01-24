/* :::: API ID :::: */
import dbConnect from "@/db/connectDB";
import BikeGeometry from "@/db/models/BikeGeometry";
import Remark from "@/db/models/Remark";


export default async function handler(request, response) {

    await dbConnect();
    const { id } = request.query;
    if (!id) return;

    console.log("id server", id);

    if (request.method === "GET") {

        const bike = await BikeGeometry.findById(id).populate('remarks');

        if (!bike) {
            return response.status(404).json({ status: "No bike found" });
        }

        response.status(200).json(bike);

    }

    if (request.method === 'DELETE') {
        await BikeGeometry.findByIdAndDelete(id).populate('remarks');
        await Remark.findByIdAndDelete(id);
        response.status(200).json({ status: `Bike deleted.` });
    }

    /*  if (request.method === 'DELETE') {
         await Remark.findByIdAndDelete(id);
         response.status(200).json({ status: `Remark deleted.` });
     } */

    if (request.method === 'POST') {
        console.log('request Body Remark:', request.body);
        const remark = await Remark.create(request.body);
        console.log('remark', remark);
        await BikeGeometry.findByIdAndUpdate(id, {
            $push: { remarks: remark._id }
        },
            { new: true }
        );
        response.status(200).json({ status: `remark updated!` });
    }


}