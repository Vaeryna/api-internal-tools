import "dotenv/config"
import {buildApp} from "./app";


const start = async () => {
    try {
        const app = await buildApp()
        app.listen({port: Number(process.env.PORT) || 3000, host: "0.0.0.0"})
        console.log(`Server running at /localhost:${process.env.PORT}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


start()