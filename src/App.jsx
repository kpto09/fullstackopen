import { useState } from 'react'

const Display = ({title}) => <div> <h2>{title}</h2></div>

const Statistic = ({value, text}) => <div>{text} {value}</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCounter = () => setGood(good + 1);
  const neutralCounter = () => setNeutral(neutral + 1);
  const badCounter = () => setBad(bad + 1);

  return (
    <div>
      <Display title='give feedback' />
      <Button onClick={goodCounter} text='good'/>
      <Button onClick={neutralCounter} text='neutral'/>
      <Button onClick={badCounter} text='bad'/>
      <Display title='statistics' />
      <Statistic value={good} text='good'/>
      <Statistic value={neutral} text='neutral'/>
      <Statistic value={bad} text='bad'/>
    </div>
  )
}

export default App