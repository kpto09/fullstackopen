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
      <p>{props.content1} {props.exercises1}</p>
      <p>{props.content2} {props.exercises2}</p>
      <p>{props.content3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content 
        content1={content[0].part} exercises1={content[0].exercises}
        content2={content[1].part} exercises2={content[1].exercises}
        content3={content[2].part} exercises3={content[2].exercises}
      />
      <Total 
        exercises1={content[0].exercises}
        exercises2={content[1].exercises}
        exercises3={content[2].exercises}
      />
    </div>
  )
}

export default App