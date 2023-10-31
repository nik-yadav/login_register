const express = require('express')
const cors = require('cors')
const mongoCo = require('./db.js')
mongoCo();
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use(cors({credentials:true, origin:'http://localhost:5173'}));

app.use(express.json())
app.use('/api',require('./Routes/CreateUser.js'))

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})
