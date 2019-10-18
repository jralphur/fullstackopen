import React from 'react';

const Course = ({course}) => {
    return (course.map(c => 
                <div key={c.id}>
                <Header text={c.name}/>
                <Content parts={c.parts}/>
                <Total total={c.parts.reduce((sum, rhs) => (sum + rhs.exercises), 0)} />
                </div>
        )
    )
}

const Header = ({text}) => {
    return (<h1> {text} </h1>)
}

const Content = ({parts}) => (
    <div>
        {parts.map(p => <Part part={p} key={p.id}/>)}
    </div>
)

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Total = ({total}) => {
    return (<p><strong>Number of exercises {total}</strong></p>)
}

export default Course