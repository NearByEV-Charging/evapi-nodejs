const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({status:"success", message:"Welcome to the API"});
});


app.listen(PORT, () => console.log("Node server listening on port 5000!"));