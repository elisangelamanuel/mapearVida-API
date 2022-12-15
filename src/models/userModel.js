const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        ambassador: [{
            animals: {
                type: Boolean,
                required: true
            },
            environment: {
                type: Boolean,
                required: true
            },
            human: {
                type: Boolean,
                required: true
            },
            plants: {
                type: Boolean,
                required: true
            },
        }],
        bio: {
            type: String,
            minLength: 0,
            maxLength: 200,
            default: "No description"
        },
        password: {
            type: String,
            required: true
        },
        timestamps: {
            type: mongoose.Schema.Types.Date,
            default: Date.now,
            immutable: true,
            required: true,
        },
    },
);

const Model = mongoose.model("user", UserSchema);

module.exports = Model;