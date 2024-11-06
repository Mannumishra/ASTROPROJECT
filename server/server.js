const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./DB/connectDB")
const SignupRouter = require("./Routers/SignupRouter")
const MonthsRouter = require("./Routers/MonthRouter")
const SamvatRouter = require("./Routers/SamvatRouter")
const DayRouter = require("./Routers/DayRouter")
const SocialMediaRouter = require("./Routers/SocialMediaRouter")
const BlogRouter = require("./Routers/BlogRouter")
const ServiceRouter = require("./Routers/ServiceRouter")
const InqueryRouter = require("./Routers/InqueryRouter")
const ContactRouter = require("./Routers/ContactRouter")
const TagLineRouter = require("./Routers/TagLineRouter")

const app = express()

app.use(cors())
app.use(express.json())
app.set(express.static("/Public"))
app.use("/Public", express.static("Public"))


app.get("/", (req, res) => {
    res.send("Server Is Running")
})

app.use("/api", SignupRouter)
app.use("/api", MonthsRouter)
app.use("/api", SamvatRouter)
app.use("/api", DayRouter)
app.use("/api", SocialMediaRouter)
app.use("/api", BlogRouter)
app.use("/api", ServiceRouter)
app.use("/api", InqueryRouter)
app.use("/api", ContactRouter)
app.use("/api", TagLineRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running at ${process.env.PORT}`)
})

connectDB()