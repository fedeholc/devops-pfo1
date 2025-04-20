// PB crea el archivo server.js con este contenido
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
app.post("/api/submit", (req, res) => {
const { username, password } = req.body;
if (!username || !password) {
return res.status(400).json({
status: "error",
message: "Faltan datos obligatorios",
});
}
console.log("Datos recibidos:", { username, password });
res.json({ status: "ok", message: "Datos recibidos correctamente" });
});
app.listen(port, () => {
console.log(`Servidor escuchando en http://localhost:${port}`);
});