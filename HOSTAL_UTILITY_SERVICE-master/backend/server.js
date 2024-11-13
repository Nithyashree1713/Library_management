import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/signup.routes.js";
// const favoriteRoutes = require('./routes/favorites');

const app = express();

app.use(express.json());
app.use("/api", router);
// app.use('/favorites', favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:{PORT}`);
});
