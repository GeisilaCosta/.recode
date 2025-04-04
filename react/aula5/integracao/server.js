const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Flavio" },
];

// GET - Listar todos os usuários
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - Atualizar um usuário
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { id: userId, ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).send("User not found");
    }
});

// DELETE - Deletar um usuário
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.status(204).send();
   });
    