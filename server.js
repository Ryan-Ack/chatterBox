const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config"); //requires database
require('./server/routes/author.routes')(app); //requires the routes
require('./server/routes/message.routes')(app); //requires the routes
require('./server/routes/channel.routes')(app); //requires the routes
//require author, message, channel routes.

const server = app.listen(port, () => console.log(`Server is running on port ${server.address().port}!`))