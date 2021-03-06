import mongoose from "mongoose";
import * as models from "@consts/_models";

const { Schema } = mongoose;

const AttachmentSchema = new Schema(
  {
    key: {
      type: String,
      isRequired: true
    },
    size: {
      type: Number,
      required: true
    },
    contentType: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: models.MODEL_USER,
      required: true,
      autopopulate: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

AttachmentSchema.plugin(require("mongoose-autopopulate"));

export const Attachment = mongoose.model(models.MODEL_ATTACHMENT, AttachmentSchema);

export default Attachment;
