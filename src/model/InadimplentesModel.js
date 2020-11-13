const mongoose = require('../config/database')
const Schema = mongoose.Schema

const InadimplentesSchema = new Schema({

    name: {type: String, required: true},
    since: {type: Date, required: true},
    value: {type: Number, required: true}

})

module.exports = mongoose.model("inadimplentes", InadimplentesSchema)