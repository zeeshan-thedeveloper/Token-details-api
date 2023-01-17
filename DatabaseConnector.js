const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://zeeshan:zeeshan@sandbox.ry9p3.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  } 
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports=db;