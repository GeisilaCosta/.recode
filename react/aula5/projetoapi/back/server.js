const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Troque com seu usuário do MySQL
  password: "040117", // Troque com sua senha do MySQL
  database: "cursos_db",
});

app.get("/api/cursos", (req, res) => {
  const query = "SELECT * FROM cursos";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/api/cursos", (req, res) => {
  const { descricao, valor } = req.body;
  const query = "INSERT INTO cursos (descricao, valor) VALUES (?, ?)";
  db.query(query, [descricao, valor], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, descricao, valor });
  });
});

app.put("/api/cursos/:id", (req, res) => {
  const { id } = req.params;
  const { descricao, valor } = req.body;
  const query = "UPDATE cursos SET descricao = ?, valor = ? WHERE id = ?";
  db.query(query, [descricao, valor, id], (err) => {
    if (err) throw err;
    res.json({ id, descricao, valor });
  });
});

app.delete("/api/cursos/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM cursos WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
