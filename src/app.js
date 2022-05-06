import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import CateRoute from "./routes/CategoryR";

const app = express();
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json({ limit: "50mb" }));

app.use('/', CateRoute);


mongoose.connect("mongodb://localhost:27017/nodejs_beershop")
    .then(() => console.log("Connecting to db"))
    .catch(err => console.log("Error connecting to db"))

const PORT =  1801;
app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
});