const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors());
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Server is runnig on PORT: ${PORT}`)
})