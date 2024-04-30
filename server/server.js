const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const colors = require("colors")
const morgan = require("morgan")
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db")
const authRoutes = require('./routes/authRoutes')
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/api', authRoutes)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})