import React from 'react'
import {  Container } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { Increase } from './store/action/AppAction'


const App = () => {
  const state = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(Increase())
  }
  return (
    <Container>
      <h1>{state}</h1>
      <button onClick={handleClick} className='px-4 py-1 rounded bg-black text-white'>Add</button>
    </Container>
  )
}

export default App