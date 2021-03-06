const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

app.use(express.json());
app.use(cors());

//"mongodb://localhost/todolist"
mongoose
  .connect(
    "mongodb+srv://jymmymurillo:1054374327@cluster0.4gblr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    connectionOptions
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
