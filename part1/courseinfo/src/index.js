import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }

    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    }

    const part3 = {
        name: "State of a component",
        exercises: 14
    }
  
    return (
        <div>
            {/* header */}
            <Header text={course}/>
            {/* content */}
            <Content part1={part1}
                     part2={part2}
                     part3={part3} />
            { /* total */ }
            <Total value={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

const Header = (head) => {
    return (<h1> {head.text} </h1>)
}

const Content = (content) => (
    <div>
        <Part part={content.part1}/>
        <Part part={content.part2}/>
        <Part part={content.part3}/>
    </div>
)

const Part = (prop) => (
    <p>{prop.part.name} {prop.part.exercises}</p>
)

const Total = (num) => (
    <p>Number of exercises {num.value} </p>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
