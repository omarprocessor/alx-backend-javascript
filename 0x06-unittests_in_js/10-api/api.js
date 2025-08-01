const express = require('express')
const app = express()

app.use(express.json())

app.get('/available_payments', (req, res) => {
res.json({
payment_methods: {
credit_cards: true,
paypal: false
}
})
})

app.post('/login', (req, res) => {
const { userName } = req.body
res.send(`Welcome ${userName}`)
})

if (require.main === module) {
app.listen(7865, () => {
console.log('API available on localhost port 7865')
})
}

module.exports = app
