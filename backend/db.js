const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const db = process.env.Mongo_URL
const mongoCo = async() =>{
    try {
        await mongoose.connect(db, {useNewUrlParser: true});
        console.log("Connected to database");
    } catch (err) {
        console.error('Database Connection Error', err);
        console.log("It is providing error");
    }
}

module.exports = mongoCo;