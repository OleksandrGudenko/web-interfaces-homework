const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var studentsComponent = require('./components/students')

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Welcome! Use tool like Postman to get all API request.'));



// app.route('/orders/:orderId')
//     .get((req, res) => {
//         console.log('OrderId is' + req.params.orderId)
//         res.send('Your orderId ' + req.params.orderId)
//     })
//     .delete();

// app.route('/orders')
//     .get((req, res) => res.send('get works, route'))
//     .post((req, res) => res.send('post works, route'))
//     .put((req, res) => res.send('put works, route'))
//     .delete((req, res) => res.send('delete works, route'));

app.use('/students', studentsComponent)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))