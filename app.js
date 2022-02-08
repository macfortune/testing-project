const express = require('express')
const  dotenv = require('dotenv')

const routes = require('./routes/index');//import index-file from routes folder
const connectDB = require('./config/db');//import db-file from config folder
dotenv.config('.env');//import .env-file from the root folder
const app = express()
connectDB();


///////////parse request of content type
app.use(express.json());

app.set('view engine', 'ejs')

//////static files
// app.use(express.static('public'))

///parse request from content-type- application/x-www-form
app.use(express.urlencoded({extended: true}));//to parse data body
app.use(express.static('public'))///import static files


app.use('/api/students', routes)

app.get('/home', (req, res) =>{
    res.render('index')
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}.`);
});