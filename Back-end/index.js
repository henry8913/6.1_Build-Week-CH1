
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 2025;

// Middleware
app.use(cors());
app.use(express.json());

// Info route
app.get("/info", (req, res) => {
  res.status(200).send("Benvenuto! Il progetto è attualmente in fase di sviluppo. Presto sarà disponibile online con tutte le sue funzionalità.");
});

// Avvio del server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});