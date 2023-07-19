const mongoose = require('mongoose');

const oemSpecsSChema = new mongoose.Schema({
    Model: String,
    Year: Number,
    List_Price: Number,
    // Colors: [String],
    Mileage: Number,
    Power: Number,
    Max_Speed: Number,
    imageUrl: String
}, {
    versionKey: false
});

const OEMSpecsModel = mongoose.model('OEMSpecs', oemSpecsSChema);

module.exports = { OEMSpecsModel };
