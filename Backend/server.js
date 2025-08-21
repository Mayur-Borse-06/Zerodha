import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Listing from "./models/listing.js";

main()
.then(() => {
    console.log("MongoDB connected successfully");
})    
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/wanderlust/listings", async(req, res) => {
    let listings = await Listing.find({});
    console.log(listings);
    res.json(listings);
})

app.delete("/wanderlust/listings/:id", async(req, res) => {
    console.log(req.params.id);
    let delListing = await Listing.findByIdAndDelete(req.params.id);
    console.log(delListing);
    res.status(200).json({message: "listing deleted successfully"});
})

app.post("/post", (req, res) => {
    let {name} = req.body;
    res.json({message: `Hello ${name} welcome back!`})
})

app.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})