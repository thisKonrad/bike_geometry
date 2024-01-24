/* :::: REMARK :::: */
import mongoose from "mongoose";

const { Schema } = mongoose;

const RemarkSchema = new Schema({
    comment: { type: String, required: true },
});

const Remark = mongoose.models.Remark || mongoose.model('Remark', RemarkSchema);

export default Remark;