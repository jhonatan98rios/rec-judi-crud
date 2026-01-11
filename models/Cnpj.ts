import mongoose, { Schema, models } from "mongoose";

export type CnpjStatus = "PENDING" | "PROCESSING" | "DONE" | "ERROR";

const CnpjSchema = new Schema(
  {
    cnpj: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "DONE", "ERROR"],
      default: "PENDING",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CnpjModel =
  models.Cnpj || mongoose.model("Cnpj", CnpjSchema);
