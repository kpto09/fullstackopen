import { useState } from 'react'

const Display = ({title}) => <div> <h2>{title}</h2></div>

const Statistic = ({value, text}) =>  { 
  if (text === 'positive') {
    return (
      <div> {text} {value} %</div>
    )
  }
  return (
    <div>{text} {value}</div>
  )
}
const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [stats, setStats] = useState({
    all: 0,
    average: 0,
    positive: 0
  })

  const handleGoodClick = () => {
    const updatedGood = clicks.good + 1
    const newClick = {
      ...clicks,
      good: updatedGood
    }

    setClicks(newClick)
    
    const updatedAll = updatedGood + clicks.neutral + clicks.bad
    const updatedAverage = (updatedGood - clicks.bad) / updatedAll
    const updatedPositive = (updatedGood / updatedAll) * 100

    const newStats = {
      all: updatedAll,
      average: updatedAverage,
      positive: updatedPositive
    }

    setStats(newStats)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = clicks.neutral + 1
    const newClick = {
      ...clicks,
      neutral: updatedNeutral
    }
    setClicks(newClick);

    const updatedAll = clicks.good + updatedNeutral + clicks.bad
    const updatedPositive = (clicks.good / updatedAll) * 100

    const newStats = {
      ...stats,
      all: updatedAll,
      positive: updatedPositive
    }

    setStats(newStats)
  }

  const handleBadClick = () => {
    const updatedBad = clicks.bad + 1
  
    const newClick = {
      ...clicks,
      bad: updatedBad
    }
    setClicks(newClick);

    const updatedAll = clicks.good + clicks.neutral + updatedBad
    const updatedAverage = (clicks.good - updatedBad) / updatedAll
    const updatedPositive = (clicks.good / updatedAll) * 100

    const newStats = {
      all: updatedAll,
      average: updatedAverage,
      positive: updatedPositive
    }
  
    setStats(newStats)
  }


  return (
    <div>
      <Display title='give feedback' />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <Display title='statistics' />
      <Statistic value={clicks.good} text='good'/>
      <Statistic value={clicks.neutral} text='neutral'/>
      <Statistic value={clicks.bad} text='bad'/>
      <Statistic value={stats.all} text='all'/>
      <Statistic value={stats.average} text='average'/>
      <Statistic value={stats.positive} text='positive'/>
    </div>
  )
}

export default App