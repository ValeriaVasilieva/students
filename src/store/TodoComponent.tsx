import React, {FC} from 'react'
import { observer } from 'mobx-react-lite'

import todo from './todo'


const TodoComponent:FC = observer(() => {
  console.log('render')
  return (
    <div>
      <button onClick={() => todo.fetchTodo()}>fetch todo</button>
      {todo.todos.map(elem => 
        <div key={elem.id}>
          <input type="checkbox" checked={elem.completed} onChange={() => todo.completedTodo(elem.id)} />
          {elem.title}
          <button onClick={() => todo.removeTodo(elem.id)}>X</button>
        </div>
        )}
    </div>
  )
})

export default TodoComponent
