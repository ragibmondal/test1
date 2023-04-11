require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { issession } = require('./middlewares/admin')


// middlewares
app.use(cors())
app.use(express.json())
app.use(fileUpload())

// routers 
const adminRouter = require('./routes/admin')
app.use('/api/admin', issession, adminRouter)

const userRouter = require('./routes/user')
app.use('/api/user', issession, userRouter)

const planRouter = require('./routes/plan')
app.use('/api/plan', issession, planRouter)

const webRouter = require('./routes/web')
app.use('/api/web', webRouter)

const pageRouter = require('./routes/page')
app.use('/api/page', issession, pageRouter)

const contentRouter = require('./routes/content')
app.use('/api/content', issession, contentRouter)

const dalleRouter = require('./routes/dalle')
app.use('/api/dalle', issession, dalleRouter)

const orderRouter = require('./routes/order')
app.use('/api/order', issession, orderRouter)

const contactRouter = require('./routes/contact')
app.use('/api/contact', issession, contactRouter)

const whatsappRouter = require('./routes/whatsapp')
app.use('/api/whatsapp', issession, whatsappRouter)


// linking client 
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./client/public")));

app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/public", "index.html"));
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Postcam api is running on port ${process.env.PORT}`)
})