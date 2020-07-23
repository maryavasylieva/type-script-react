import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void, // 1-й вариант записи
    onRemove: (id: number) => void // 2-й вариант записи
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

    if (todos.length === 0) {
        return <p className='center'>No tasks at all</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']

                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text' onClick={(event) => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}
