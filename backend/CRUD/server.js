const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());  

app.use(express.urlencoded({ extended: true }));   

const db = require("./models");
// const userRoute = require("./routes/userRoute");
const usercontroller = require('./controllers/userController')
db.sequelize.sync();


// require("./routes/userRoute")(app);
app.get('/displayData',usercontroller.findAll)
app.post('/addusers',usercontroller.create)
app.put('/updateUserData/:id',usercontroller.update)
app.delete('/deleteData/:id',usercontroller.delete)


// listen for requests
const PORT = 8001;
var server =app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = server

