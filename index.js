const bodyParser = require('body-parser');
const express = require("express")

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/dist"));

app.listen(3000, function() {
  console.log(`listening on port 3000!`);
});
















