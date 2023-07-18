const express = require("express");
const { connection } = require("./db.js");
const { UserRouter } = require("./routes/users.routes");
const app = express();
app.use(express.json())
const cors = require("cors");
const { inventoryRouter } = require("./routes/marketplaceInventory.route.js");
app.use(cors())
require("dotenv").config();
app.use("/users", UserRouter);
app.use("/inventory", inventoryRouter);


app.listen(process.env.Port, async () => {
    try {
        await connection;
        console.log(`DB Connected`)
        console.log(`Succesfully running at Port: ${process.env.Port}`)
    } catch (error) {
        console.log(error.message)
    }
})