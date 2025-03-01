const express = require('express');
const {response} = require("express");
const fs = require("fs");
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World!");
})

app.get('/todos', (req, res) => {
    fs.readFile('./database/todos.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(`file un-readable with error ${err}`)
        }
        const todos = JSON.parse(data)
        res.json({todos: todos});
    })
})

app.put('/todos/:id/complete', (req, res) => {
    const id = req.params.id;
    const complete = req.params.complete
})

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});
