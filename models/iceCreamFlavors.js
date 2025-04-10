const mongoose = require('mongoose')

const iceCreamFlavorsSchema = mongoose.Schema({
    flavor: String,
    description: String,
    price: String
})

const IceCreamFlavors = mongoose.model('IceCreamFlavors', iceCreamFlavorsSchema)
module.exports = IceCreamFlavors