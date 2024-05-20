import mongoose, { Schema } from "mongoose";
import { TagsDocument } from "../interfaces/tags";

const TagSchema = new Schema<TagsDocument>({
    tags_id: { type: String, required: true, unique: true },
    status: { type: Boolean, required: true, default: false },
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
  
  const TagModel = mongoose.models.Tag || mongoose.model<TagsDocument>('Tag', TagSchema);
  
  export default TagModel;