const express = require('express');
const inventoryRouter = express.Router();
const { auth } = require('../middlewares/auth.middleware.js');
const { MarketplaceInventory } = require('../models/marketplaceInventory.model.js');
inventoryRouter.use(express.json());
const cors = require("cors");
inventoryRouter.use(cors());

inventoryRouter.get('/', async (req, res) => {
    const { sort } = req.query;
    let query = {};
    let sortValue;
    if (sort == "asc") {
        sortValue = { price: 1 };
    } else if (sort == "desc") {
        sortValue = { price: -1 };
    }
    try {
        const allInventoryData = await MarketplaceInventory.find().sort(sortValue);
        res.status(200).json(allInventoryData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

inventoryRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await MarketplaceInventory.findById(id);
        if (data) {
            res.status(200).json({ data: data });
        } else {
            res.status(404).json({ error: '404 Not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);
// inventoryRouter.use(auth);

inventoryRouter.post('/', async (req, res) => {
    try {
        const newInventory = new MarketplaceInventory({ ...req.body });
        await newInventory.save();
        res.status(201).json({ msg: "Added succesfully", data: newInventory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);

inventoryRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const updatedInventory = await MarketplaceInventory.findByIdAndUpdate(id, payload);
        if (updatedInventory) {
            res.status(200).json({ msg: "Updated successfully", data: updatedInventory });
        } else {
            res.status(404).json({ error: error.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);


inventoryRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const inventory = await MarketplaceInventory.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
)



module.exports = {
    inventoryRouter
}