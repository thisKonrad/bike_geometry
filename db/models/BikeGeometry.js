/* :::: bike geometry model schema :::: */
import mongoose from "mongoose";


const { Schema } = mongoose;

const BikeGeometrySchema = new Schema({
    bikeTitle: { type: String, required: true },
    bikeType: { type: String, required: true },
    userName: { type: String, required: true },
    insideLeg: { type: Number, required: true },
    comfortRange: { type: Number, required: true },
    strQuotient: { type: Number, },
    seatTubeAngle: { type: Number, },
    wheelsize: { type: Number, },
    topTubeLength: { type: Number, },
    frameSize: { type: Number, },
    saddleHeight: { type: Number, },
    stack: { type: Number, },
    reach: { type: Number, },
    crankLength: { type: Number, },
});

const BikeGeometry = mongoose.models.BikeGeometry || mongoose.model("BikeGeometry", BikeGeometrySchema);

export default BikeGeometry;