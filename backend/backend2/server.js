const express = require("express");
const CORS = require("cors");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const multer = require("multer");
const app = express();
const prisma = new PrismaClient();
const upload = multer();
const port = 5000;

// using cors to allow for global requests
app.use(
  CORS({
    origin: "*",
  })
);

// setting urlencoded to true for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.status(200).json(todos);
});

// route for user creation , takes in various data neccessary for account creation
app.post("/create", async (req, res) => {
  const { description } = req.body;
  const todo = await prisma.todo.create({
    data: { description: description },
  });
  res.status(200).json({ message: "todo added" });
});

app.delete("/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const todo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  res.status(200).json({ message: "todo deleted" });
});

app.put("/update/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body;

  console.log(id);
  const todo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      description: description,
    },
  });
  res.status(200).json({ message: "todo updated" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
