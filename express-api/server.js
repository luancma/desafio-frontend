const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OAuth = require("oauth");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body.location);
  var header = {
    "X-Yahoo-App-Id": "M7gNVP32"
  };
  var request = new OAuth.OAuth(
    null,
    null,
    "dj0yJmk9aTFvR2dKSXoxdmFIJmQ9WVdrOVRUZG5UbFpRTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWUx",
    "997a8ba3fd4bcf92ebd69f42c6a9df755d9cdbca",
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${
      req.body.location
    },ca&u=c&format=json`,
    null,
    null,
    function(err, data, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
