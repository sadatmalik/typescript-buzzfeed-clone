import express, { Request, Response } from 'express'

const PORT = 8000
const app = express()

app.listen(PORT, () => console.log('server is running on port ' + PORT))

