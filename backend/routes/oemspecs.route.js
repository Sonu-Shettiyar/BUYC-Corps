const express = require("express");
const { OEMSpecsModel } = require("../models/oem.model");
const oemSpecsRouter = express.Router();

oemSpecsRouter.get("/", async (req, res) => {
    try {
        const OEMSpecs = await OEMSpecsModel.find();
        res.status(200).json({ data: OEMSpecs })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
})


module.exports = { oemSpecsRouter }