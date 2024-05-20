import mongoose, { Schema } from "mongoose";
import { SensorsDocument } from "../interfaces/sensors";

const SensorsSchema = new Schema<SensorsDocument>({
    id: { type: Schema.Types.ObjectId, auto: true },
    node_id: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    gas_concentration: { type: Number, required: true },
    distance_level: { type: Number, required: true },
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

const SensorsModel = mongoose.models.Sensors || mongoose.model<SensorsDocument>('Sensors', SensorsSchema);

export default SensorsModel;