import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

const PORT = 8000
const app = express()

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get('https://ea52e3d7-cb64-4a0e-bb82-2aa171b5211e-westeurope.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quirky_quizes', {
            headers: {
                'X-Cassandra-Token': 'AstraCS:wPLWKpzFAXUzqdFjZTsIoxGc:37c81251a45ae8ae0cd83219180bdf6c3d82d875910f95566fca6eea84e85e02',
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem = await response.data.data['54a25953-f895-47a3-adc4-0f2505e2dc81']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('server is running on port ' + PORT))

