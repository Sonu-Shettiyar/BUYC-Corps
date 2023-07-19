const mongoose = require("mongoose");

const marketplaceInventorySchema = mongoose.Schema({
    title: String,
    image: String,
    KMsOnOdometer: Number,
    majorScratches: String,
    originalPaint: String,
    accidentsReported: Number,
    previousBuyers: Number,
    registrationPlace: String,
    dealerId: String,
    dealerName: String,
    description: [String],
    price: Number,
    color: String,
    // --------------
    Model: String,
    Year: Number,
    List_Price: Number,
    Colors: [String],
    Mileage: Number,
    Power: Number,
    Max_Speed: Number,
    imageUrl: String
}, {
    versionKey:false
});

const MarketplaceInventory = mongoose.model('marketplaceInventory', marketplaceInventorySchema);

module.exports = { MarketplaceInventory };