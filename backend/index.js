const { inventoryRouter } = require("./routes/marketplaceInventory.route.js");
const { oemSpecsRouter } = require("./routes/oemspecs.route.js");
const { UserRouter } = require("./routes/users.routes");
const { connection } = require("./db.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use("/inventory", inventoryRouter);
app.use("/oem", oemSpecsRouter);
app.use("/users", UserRouter);
require("dotenv").config();
app.use(express.json())
app.use(cors())


app.listen(process.env.Port, async () => {
    try {
        await connection;
        console.log(`DB Connected`)
        console.log(`Succesfully running at Port: ${process.env.Port}`)
    } catch (error) {
        console.log(error.message)
    }
})