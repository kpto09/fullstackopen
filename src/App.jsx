const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Parts content={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts content={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts content={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Parts = (props) => {
  return (
    <div>{props.content} {props.exercises}</div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      />
      <Total 
        parts={parts}
      />
    </div>
  )
}

export default App