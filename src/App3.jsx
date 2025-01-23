import { useState } from 'react'

const Display = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}>button</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);

  const handleGoodClick = () => {
    // good = good + 1
    console.log("clicking button")
    setGood(good+1);
  }

  return (
    <div>
      <Display text='give feedback' />
      {good}
      <Button handleClick={handleGoodClick} />
    </div>
    
  )
}

export default App

// notes
// remember that we can only use useState in an arrow function environment, such as the arrow function