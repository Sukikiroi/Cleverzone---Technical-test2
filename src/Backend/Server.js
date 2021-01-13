const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;
const db = require("./queries");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/users", db.getUsers);
app.get("/Agencies/:id", db.getAgencies);
app.post("/creatagence/:id", db.createAgence);
app.put("/BedlUser/:id", db.BedlUser);
app.delete("/deleteAgence/:id",db.deleteAgence)
app.post("/signup", db.signup);
app.post("/signin", db.signin);




app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API", name: "aziz" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
