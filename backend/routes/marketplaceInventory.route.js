const express = require('express');
const inventoryRouter = express.Router();
const { MarketplaceInventory } = require("./marketplaceInventory.route.js");
const { auth } = require('../middlewares/auth.middleware.js');
inventoryRouter.use(express.json());
inventoryRouter.use(auth);


// API routes for Marketplace Inventory
inventoryRouter.get('/inventory', async (req, res) => {
    try {
        const allInventoryData = await MarketplaceInventory.find();
        res.status(200).json(allInventoryData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

inventoryRouter.post('/inventory', async (req, res) => {
  
    try {
        const newInventory = new MarketplaceInventory({ ...req.body });
        await newInventory.save(); 
      res.status(201).json({msg:"Added to Inventory!!",newInventory});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
  


inventoryRouter.get('/inventory/:id', marketplaceInventoryController.getInventoryById);
inventoryRouter.delete('/inventory/:id', marketplaceInventoryController.deleteInventoryById);


module.exports = {
    inventoryRouter
}