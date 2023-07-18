const mongoose = require("mongoose");

const marketplaceInventorySchema = mongoose.Schema({
    title: String,
    image: String,
    KMsOnOdometer: Number,
    majorScratches: Boolean,
    originalPaint: Boolean,
    accidentsReported: Number,
    previousBuyers: Number,
    registrationPlace: String,
    dealerId: String,
    dealerName: String,
    description: [String],
    price: Number,
    mileage: String,
    color:String
}, {
    versionKey:false
});

const MarketplaceInventory = mongoose.model('marketplaceInventory', marketplaceInventorySchema);

module.exports = { MarketplaceInventory };