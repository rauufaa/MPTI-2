import express from "express"
import { publicRouter } from "../routes/public-api.js"
import { errorMiddleware } from "../middleware/error-middleware.js"
import cors from "cors"




export const web = express()
web.use(cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["POST", "PUT", "PATCH", "DELETE"],
    origin: "*"
}))
web.use(express.json())
web.use(publicRouter)
web.use(errorMiddleware)

