'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const AddSchema = new Schema({

    type: {
        type: String,
        required: [true,'You need to enter a type'],
    },
    src: {
        type: String,
        required: [true,'You need to enter a type'],
    },
    company: {
        type: String,
        required: [true,'You need to enter a type'],
    },


},{timestamps: true});
const Add=mongoose.model('Add', AddSchema);