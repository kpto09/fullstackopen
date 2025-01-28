import Part from "./Part"

const Content = ({course}) => {
    const total = course.parts.reduce(
        (acc, curVal) => acc + curVal.exercises, 0
    ) 

    return (
        <div> 
            <Part course={course}/>
            <b>Total of {total} exercises</b>
        </div>
    )
}

export default Content