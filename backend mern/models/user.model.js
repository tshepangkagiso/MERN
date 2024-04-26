'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
},{
    timestamps: true
});

// we now have a table in the database called User with those properties defined in the schema
const User = mongoose.model('User', userSchema)

module.exports = User;