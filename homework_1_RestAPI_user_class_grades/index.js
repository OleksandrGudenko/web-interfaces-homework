const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var studentsComponent = require('./components/students')
var coursesComponent = require('./components/courses')
var gradesComponent = require('./components/grades')

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Welcome! Use tool like Postman to get all API request.' +
'The postman(web-interfaces-Homework 1.postman_collection) file included in the ' +
'<a href="https://github.com/OleksandrGudenko/web-interfaces-homework/tree/master/homerowk_1" target="_blank">github repository</a>' +
'.'));


app.use('/students', studentsComponent)
app.use('/courses', coursesComponent)
app.use('/grades', gradesComponent)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))