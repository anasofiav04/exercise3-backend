import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/Cards.js";
const app = express();
connectDB();

app.use(express.json());

app.post("/createCards", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    console.log(card);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/getAllCards", async (req, res) => {
  try {
    const card = await Card.find();
    console.log(card);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/getCards/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    console.log(card);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting card" });
  }
});

app.put("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCard = await Card.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({
      message: "Card updated successfully",
      data: updatedCard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating card" });
  }
});

// app.post("/send", (req, res) => {
//   const { user, email } = req.body;
//   console.log("Datos recibidos:" + user + "" + email);

//   res.status(200).send("Data received succesfully");
// });

// app.get("/hello", (req, res) => {
//   res.status(200).send("Hola mundo desde Node JS");
// });

// app.get("/hola", (req, res) => {
//   res.status(200).send("Hola world");
// });

app.listen(3000, () => {
  console.log("Servidor ejecutandose en https://localhost:3000");
});
