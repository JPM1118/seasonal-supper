const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  state: { type: String, required: true },
  month: {
    January: {
      produce: { type: Array, default: [] }
    },
    February: {
      produce: { type: Array, default: [] }
    },
    March: {
      produce: { type: Array, default: [] }
    },
    April: {
      produce: { type: Array, default: [] }
    },
    May: {
      produce: { type: Array, default: [] }
    },
    June: {
      produce: { type: Array, default: [] }
    },
    July: {
      produce: { type: Array, default: [] }
    },
    August: {
      produce: { type: Array, default: [] }
    },
    September: {
      produce: { type: Array, default: [] }
    },
    October: {
      produce: { type: Array, default: [] }
    },
    November: {
      produce: { type: Array, default: [] }
    },
    December: {
      produce: { type: Array, default: [] }
    }
  }
});

module.exports = mongoose.model("State", dataSchema);
