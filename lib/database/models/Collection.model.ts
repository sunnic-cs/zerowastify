import mongoose, { Schema } from "mongoose";
import { CollectionDocument } from "../interfaces/collection";

const CollectionSchema = new Schema<CollectionDocument>({
    id: { type: Schema.Types.ObjectId, auto: true },
    card_id: { type: String, required: true },
    node_id: { type: String, required: true },
    waste_level: { type: Number, required: true, min: 0, max: 100 },
    timestamp: { type: Date, default: Date.now },
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
  
  const CollectionModel = mongoose.models.Collection || mongoose.model<CollectionDocument>('Collection', CollectionSchema);
  
  export default CollectionModel;