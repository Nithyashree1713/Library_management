import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/signup.routes.js";
// const favoriteRoutes = require('./routes/favorites');

const app = express();

app.use(express.json());
app.use("/api", router);
// app.use('/favorites', favoriteRoutes);


app.listen(5000, () => {
    connectDB();
    console.log(`Server started at http://localhost:5000`);
});
