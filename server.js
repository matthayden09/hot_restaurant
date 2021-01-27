const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// const server = http.createServer((req, res)=>{
//     console.log(res)
//     res.end('Welcome to our restaurant!')
// })


const apiTableLink = [
    {
        name: 'Tracy',
        phone: '123456789',
        email: 'tracy@email.com',
        uniqueId: '1'
    },
    {
        name: 'Rachel',
        phone: '123456789',
        email: 'rachel@email.com',
        uniqueId: '2'
    },
    {
        name: 'Desta',
        phone: '123456789',
        email: 'desta@email.com',
        uniqueId: '3'
    },
    {
        name: 'Matt',
        phone: '123456789',
        email: 'matt@email.com',
        uniqueId: '4'
    },

]

const apiWaitList = [
    {
        name: 'Bob',
        phone: '123456789',
        email: 'bob@email.com',
        uniqueId: '5'
    }
]

// HTML ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home.html'))
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/reserve.html'))
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/tables.html'))
})


// API Routes
app.get('/api/apiTableLink', (req, res) => {
    // res.json(apiTableLink)
    console.log('Welcome to our restaurant!')
    res.json(apiTableLink)
})

app.get('/api/apiWaitList', (req, res) => {
    res.json(apiWaitList)
})

// Add new reservations
app.post('/api/apiTableLink/reserve', (req, res) => {
    const newReservation = req.body
    apiTableLink.push(newReservation)
    console.log(apiTableLink)
    res.status(200).send('Reservation added!')
})


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


