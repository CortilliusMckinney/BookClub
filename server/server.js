const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

require("./config/mongoose.config");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb'}));


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

require("./routes/book.route")(app); //we're importing the routes export
require("./routes/user.route")(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
