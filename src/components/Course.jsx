import Header from "./Header"
import Content from "./Content"

const Course = ({courses}) => {
  const content = courses.map(course => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
      </div>
    )
  })

  return (
    <div>
      {content}
    </div>
  )
}
  
export default Course