// Includes the FS package for reading and writing packages
var fs = require("dotenv").config();

fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
  
    console.log(data);
    }
  );
  