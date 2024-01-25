/* :::: API REMARKS ID :::: */
import dbConnect from "@/db/connectDB";
import BikeGeometry from "@/db/models/BikeGeometry";
import Remark from "@/db/models/Remark";


export default async function handler(request, response) {

    await dbConnect();
    const { id } = request.query;
    if (!id) return;

    console.log("id server Remark Side", id);

    if (request.method === 'DELETE') {
        await Remark.findByIdAndDelete(id);
        response.status(200).json({ status: `REMARK deleted.` });
    }

    /*     if (request.method === "DELETE") {
            // Find the DetailCard document that contains the comment
            const detailCard = await BikeGeometry.findOne({
                remarks: { $elemMatch: { _id: id } },
            });
            if (detailCard) {
                // Remove the comment from the remarks array
                detailCard.remarks = detailCard.remarks.filter(
                    (remark) => remark._id.toString() !== id);
                await detailCard.save();
            }
            await Remark.findByIdAndDelete(id);
        }; */

}