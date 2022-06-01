import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: {type: String,trim: true,},
    autor: { type: String, required: true, trim: true, unique: false },
    genero: { type: String, required: true, trim: true, unique: false },
    editorial: { type: String, required: true, trim: true, unique: false },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Libros", TaskSchema);
