'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    username:{ type: String, required: true },
    description:{ type: String, required: true },
    duration:{ type: Number, required: true },
    date:{ type: Date, required: true },
}, {
    timestamps: true
});

// we now have a table in the database called Exercise with those properties defined in the schema
const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;

