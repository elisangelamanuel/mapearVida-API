const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        pointName: {
            type: String,
            required: true,
            unique: true,
        },
        cep: {
            type: Number,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        timestamps: {
            type: mongoose.Schema.Types.Date,
            default: Date.now,
            immutable: true,
            required: true,
        },
    },
);

const Model = mongoose.model("map", MapSchema);

module.exports = Model;