import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import About from './component/About'
import CreateNew from './component/CreateNew'
import Footer from './component/Footer'
import AnecdoteList from './component/AnecdoteList'
import Menu from './component/Menu'
import UnitAnecdote from './component/UnitAnecdote'



const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const match = useRouteMatch('/anecdotes/:id')
  console.log(match)
  const singleAnecdote = match ? anecdotes.find((n) => n.id === match.params.id) : null
  console.log(singleAnecdote)

  const addNew = (newAnecdote) => {
    newAnecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes([...anecdotes, newAnecdote])
    setNotification(`New anecdote titled "${newAnecdote.content}" created`)
    setTimeout(() => {
      setNotification('')
    }, 10000)

  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const style = {
    border: '1px solid black',
    padding: 5
  }

  return (
    <div style={{padding: "1em"}}>
      <h1>Software Anecdotes</h1>
      <Menu />

      <Switch>
        <Route exact path='/'>
          {notification && <div style={style}>{notification}</div> }
          <AnecdoteList anecdotes={anecdotes} />
        </Route>

        <Route exact path='/create'>
          <CreateNew addNew={addNew} />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/anecdotes/:id'>
          <UnitAnecdote 
          anecdote={singleAnecdote}
          vote={vote} />
        </Route>
      </Switch>
      <br />

      <Footer />

    </div>
  )
}

export default App;