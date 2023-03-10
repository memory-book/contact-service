const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: String,
    phone: String,
    mobile1: String,
    mobile2: String,
    email1: String,
    email2: String,
    userId: String
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", ContactSchema);
