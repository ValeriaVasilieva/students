import React from 'react'
import { observer } from 'mobx-react-lite'

import TodoComponent from './TodoComponent'
import counter from './counter'


const CounterComponent = observer(() => {
  console.log('renderCount')
  return (
    <div>
      <div>{counter.total}</div>
      <button
        onClick={() => {
          counter.increment(), console.log(counter.count)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter.decrement(), console.log(counter.count)
        }}
      >
        -
      </button>
      <TodoComponent/>
    </div>
  )
})

export default CounterComponent
