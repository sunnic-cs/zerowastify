import mongoose, { Schema } from "mongoose";
import { BinDocument } from "../interfaces/bin";

const BinSchema = new Schema<BinDocument>({
    node_id : { type : String, required : true},
    location: { type: String, required: true },
    type: { type: String, required: true, enum: ['recyclable', 'organic', 'general'] },
    lastEmptied: { type: Date },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  });
  
  const BinModel = mongoose.models.Bin || mongoose.model<BinDocument>('Bin', BinSchema);
  
  export default BinModel;