import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // const all = (good + neutral + bad)
    // const average = good + (bad * -1) / (good + neutral + bad)
    return (
        <div>
            <h1>give feedback</h1>
            <Button setter={() => setGood(good + 1)} text="good" />
            <Button setter={() => setNeutral(neutral + 1)} text="neutral" />
            <Button setter={() => setBad(bad + 1)} text="bad" />
            <h1>statistics</h1>
            <table>
                <tr>
                    <th scope="row">good</th>
                    <td>{good}</td>
                </tr>
                <tr>
                    <th scope="row">neutral</th>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <th scope="row">bad</th>
                    <td>{bad}</td>
                </tr>
            </table>
        </div>
    )
}

const Button = ({setter, text}) => {

    return (
        <>
            <button onClick={setter}>{text}</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));