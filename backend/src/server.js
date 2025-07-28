import express from "express";
import contactRoute from "./routes/contact.js"
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}))

app.use(express.json())

app.use("/api/contact", contactRoute)

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => console.log(`App is listening on localhost:${port}`));
