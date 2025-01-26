import { useState } from 'react'

const Header = ({title}) => {
  return (
    <h2>
      {title}
    </h2>
  )
}

const DisplayAnecdote = ({selected, anecdotes}) => {

  return(
    <div>
      <p>{anecdotes[selected]}</p>
    </div>
  )
}

const Winner = ({votes, anecdotes}) => {
  const maxVote = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVote)
  
  return (
    <div>
      <DisplayAnecdote selected={maxIndex} anecdotes={anecdotes} />
      <p>has {maxVote} votes </p>
    </div>
  )
}


const Votes = ({votes, selected}) => {
  const maxVote = Math.max(...votes)

  return (
    <div>
      <p>has {votes[selected]} votes</p>
      <p>max votes {maxVote}</p>
    </div>
  )
  
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const voteArr = Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteArr)

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    
    setVotes(copy)
  }

  return (
    <div>
      <Header title='Anecdote of the day' />
      <DisplayAnecdote selected={selected} anecdotes={anecdotes} votes={votes} />
      <Votes votes={votes} selected={selected} />
      <Button onClick={handleVoteClick} text='vote'/>
      <Button onClick={handleRandomClick} text='next anecdote'/>

      <Header title='Anecdote with the most votes' />
      <Winner votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App