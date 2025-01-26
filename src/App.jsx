import { useState } from 'react'

// todo: fix statistics and button logic

const Display = ({title}) => <div><h2>{title}</h2></div>

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
      <td>{text}</td> 
      <td>{value} %</td>
    </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistic = ({clicks, text}) =>  {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text={text.good} value={clicks.good}/>
        <StatisticLine text={text.neutral} value={clicks.neutral}/>
        <StatisticLine text={text.bad} value={clicks.bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
      </tbody>     
    </table>
  )
  
}
const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const text = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  }

  const handleGoodClick = () => {
    setClicks({
      ...clicks,
      good: clicks.good +1
    })
  }
  const handleNeutralClick = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral +1
    })
  }

  const handleBadClick = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad +1
    })
  }


  return (
    <div>
      <Display title='give feedback' />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <Display title='statistics' />
      <Statistic clicks={clicks} text={text}/>
    </div>
  )
}

export default App