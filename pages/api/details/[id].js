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

        //const bike = await BikeGeometry.findById(id).populate('remark');
        const bike = await BikeGeometry.findById(id);

        console.log("bike", bike);

        if (!bike) {
            return response.status(404).json({ status: "No bike found" });
        }

        response.status(200).json(bike);

    }

    if (request.method === "DELETE") {
        console.log("server id", id);
        await BikeGeometry.findByIdAndDelete(id);

        response.status(200).json({ status: `Bike deleted.` });
    }

    if (request.method === 'POST') {
        const remark = await Remark.create(request.body);
        await BikeGeometry.findByIdAndUpdate(id, {
            $push: { remarks: remark._id }
        },
            { new: true }
        )
    }


    response.status(200).json({ status: `remark updated!` });
}


/*  if (request.method === "PUT") {
await BikeGeometry.findByIdAndUpdate(id, {
$set: request.body,
});
response.status(200).json({ status: `Bike updated!` });
} */