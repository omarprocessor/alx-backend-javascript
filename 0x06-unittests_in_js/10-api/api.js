const express = require('express')
const app = express()

app.use(express.json())

const port = 7865

app.get('/available_payments', (req, res) => {
res.json({
payment_methods: {
credit_cards: true,
paypal: false
}
})
})

app.post('/login', (req, res) => {
const userName = req.body.userName
res.send(`Welcome ${userName}`)
})

const server = app.listen(port, () => {
console.log(`API available on localhost port ${port}`)
})

module.exports = { app, server }
