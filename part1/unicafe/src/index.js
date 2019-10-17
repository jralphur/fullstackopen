import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>give feedback</h1>
            <Button setter={() => setGood(good + 1)} text="good" />
            <Button setter={() => setNeutral(neutral + 1)} text="neutral" />
            <Button setter={() => setBad(bad + 1)} text="bad" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

const Statistic = ({value, text}) => {
    return (
        <tr>
            <th scope="row">{text}</th>
            <td>{value}</td>
        </tr>
    )
}
const Statistics = ({good, neutral, bad}) => {
    const all = (good + neutral + bad)
    const average = all === 0 ? 0 : (good - bad) / all
    const positive = all === 0 ? 0 : (good / all) * 100
    return all !== 0 ? (
        <>
         <h1>statistics</h1>
            <table>
               <Statistic value={good} text="good" />
               <Statistic value={neutral} text="neutral" />
               <Statistic value={bad} text="bad" />
               <Statistic value={all} text="all" />
               <Statistic value={average} text="average" />
               <Statistic value={positive.toString() + '%'} text="positive" />
            </table>
        </>
    ) :
    (<h1> 
        No feedback given
    </h1>)
}

const Button = ({setter, text}) => {
    return (
        <>
            <button onClick={setter}>{text}</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));