/* :::: bike geometry model schema :::: */
import mongoose from "mongoose";
/* import "./BikeGeometry"; */

const { Schema } = mongoose;

const BikeGeometrySchema = new Schema({
    bikeTitle: { type: String, required: true },
    userName: { type: String, required: true },
    insideLegLength: { type: Number, required: true },
    frameSize: { type: Number, },
    topTubeLength: { type: Number, },
    saddleHeight: { type: Number, },
    stack: { type: Number, },
    reach: { type: Number, },
    seatTubeAngle: { type: Number, },
    strRangeSelect: { type: Number, },
    crankLength: { type: Number, },
    wheelsize: { type: Number, },
});

const BikeGeometry = mongoose.models.BikeGeometry || mongoose.model("BikeGeometry", BikeGeometrySchema);

export default BikeGeometry;