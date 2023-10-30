const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
var mongoose = require("mongoose");

mongoose
  .connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {});

var Books = require("./models/book.js");
const { error } = require("console");

app.get("/", (req, res) => {
  res.send("Hi this is Siddu Putchala");
});
app.get("/viewallbooks", (req, res) => {
  Books.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

app.get("/viewbook/:id", (req, res) => {
  Books.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.json({ message: "Book with this id not found" });
      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

app.post("/addbook", (req, res) => {
  var newBook = new Books({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  });

  Books.find({ title: req.body.title })
    .then((data) => {
      if (data.length > 0) {
        res.json({ message: "Book with this title already exists" });
      } else {
        newBook
          .save()
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json({ message: err.message });
          });
      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

app.put("/updatebook/:id", (req, res) => {
  Books.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  })
    .then((data) => {
      if (data) {
        res.json({message: "Book details updated successfully"});
      } else {
        res.json({ message: "Book with this id does not exist" });
      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

app.delete("/deletebook/:id", (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (data) {
        res.json({ message: "Book deleted successfully" });
      } else {
        res.json({ message: "Book with this id does not exist" });
      }
    })
    .catch((err) => {
      res.json({ message: error.message });
    });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
