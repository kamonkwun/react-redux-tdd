import { action, storiesOf } from '@kadira/storybook';

import React from 'react'
import TodoItem from './TodoItem'

const mockItem = {
  _id: 'id1', title: 'some todo', isCompleted: false
}

const renderTodoItemWithProps = (props) => {
  const backgroundStyle = {
    position: 'fixed',
    top: 0, left: 0, bottom: 0, right: 0,
    backgroundColor: 'white'
  }
  return (
    <div style={backgroundStyle}>
      <ul className='todo-list'>
        <TodoItem {...props}
          onToggleEditing={action('toggleEdit')}
          onToggleItemCompleted={action('toggleCompleted')}
          onEditCompleted={action('editCompleted')}
          onDestroy={action('delete')}
        />
      </ul>
    </div>
  )
}

storiesOf('TodoItem', module)
  .add('Normal', () => (
    renderTodoItemWithProps({ item: mockItem })
  ))
  .add('Editing', () => (
    renderTodoItemWithProps({ item: mockItem, editing: true })
  ))
