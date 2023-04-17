const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
let app = express();
app.use(express.json());

mongoose.connect(process.env.DB_STRING).then(() => {
    console.log("db connected");
}).catch(err => { console.log(err); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});