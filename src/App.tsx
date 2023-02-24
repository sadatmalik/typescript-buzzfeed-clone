import React, { useState, useEffect} from 'react'
import Title from './components/Title'
import {QuizData} from '../interfaces'

const App = () => {

    const [quiz, setQuiz] = useState<QuizData | null>()

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/quiz-item')
            const json = await response.json()
            setQuiz(json)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(quiz)

    return (
          <div>
            <Title
                title={quiz?.title}
                subtitle={quiz?.subtitle}
            />
          </div>
      );
}

export default App;
