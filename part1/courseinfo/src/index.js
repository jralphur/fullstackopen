import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ]
  
    return (
        <div>
            {/* header */}
            <Header text={course}/>
            {/* content */}
            <Content parts={parts}/>
            { /* total */ }
            <Total value={parts} />
        </div>
    )
}

const Header = (head) => {
    return (<h1> {head.text} </h1>)
}

const Content = (props) => (
    <div>
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>
    </div>
)

const Part = (prop) => (
    <p>{prop.part.name} {prop.part.exercises}</p>
)

const Total = (props) => {
    let total = props.value[0].exercises +
                props.value[1].exercises +
                props.value[2].exercises
    return (<p>Number of exercises {total} </p>)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
