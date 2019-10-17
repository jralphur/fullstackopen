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

const TableRow = ({value, text, symbol}) => {
    return (
        <tr>
            <th scope="row">{text}</th>
            <td>{value}{symbol}</td>
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
               <TableRow value={good} text="good" />
               <TableRow value={neutral} text="neutral" />
               <TableRow value={bad} text="bad" />
               <TableRow value={all} text="all" />
               <TableRow value={average} text="average" />
               <TableRow value={positive} text="positive" symbol='%' />
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