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
        //await BikeGeometry.findByIdAnd(id).delete(id);
        /*   await Remark.findByIdAndDelete(id, {
              $pull: { _id }
          }); */
        response.status(200).json({ status: `REMARK deleted.` });
    }


    /*     if (request.method === 'POST') {
            console.log('request Body Remark:', request.body);
            const remark = await Remark.create(request.body);
            console.log('remark', remark);
            await BikeGeometry.findByIdAndUpdate(id, {
                $push: { remarks: remark._id }
            },
                { new: true }
            );
            response.status(200).json({ status: `remark updated!` });
        } */


}