import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            {/* header */}
            <Header text={course}/>
            {/* content */}
            <Content part1={part1} exercises1={exercises1}
                     part2={part2} exercises2={exercises2}
                     part3={part3} exercises3={exercises3} />
            { /* total */ }
            <Total value={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

const Header = (head) => (
    <h1>{head.text}</h1>
)

const Content = (content) => (
    <div>
        <Part part={content.part1} exercise={content.exercise1} />
        <Part part={content.part2} exercise={content.exercise2} />
        <Part part={content.part3} exercise={content.exercise3} />
    </div>
)

const Part = (part) => (
    <p>{part.part} {part.exercise}</p>
)

const Total = (num) => (
    <p>Number of exercises {num.value} </p>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
