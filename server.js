const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require(`cors`)
const IceCreamFlavors = require('./models/iceCreamFlavors.js')
app.use(cors())
app.use(express.json())


const flavorsRoute = `/iceCreamFlavors`
const flavorID = 'flavorID'
const flavorsRouteWithID = `${flavorsRoute}/:${flavorID}`


mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
});




// Create
app.post(flavorsRoute, async (request, response) => {
    response.json(await IceCreamFlavors.create(request.body))
})




// Read
app.get(flavorsRoute, async (request, response) => {
    response.json(await IceCreamFlavors.find())
})




// Update
app.put(flavorsRouteWithID, async (request, response) => {
    response.json(await IceCreamFlavors.findByIdAndUpdate(request.params.flavorID, request.body, { new: true }))
})




// Delete
app.delete(flavorsRouteWithID, async (request, response) => {
    response.json(await IceCreamFlavors.findByIdAndDelete(request.params.flavorID))
})




app.listen(3000, () => {
  console.log('The express app is ready!')
});
