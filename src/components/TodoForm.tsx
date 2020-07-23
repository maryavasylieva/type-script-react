import React, { useState, useRef } from 'react'


interface ITodoFormProps {
    onAdd(title: string):void
}


export const TodoForm: React.FC<ITodoFormProps> = (props) => {
    // == using useRef Hooks ==
     const ref = useRef<HTMLInputElement>(null)

    // == using useState Hooks: ==
    // const [title, setTitle] = useState<string>('');
    // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {

            // = useRef Hooks =
            props.onAdd(ref.current!.value)
            ref.current!.value = ''

            // = useState Hooks =
            // console.log(title)
            // setTitle('')
        }
    }


    return (
        <div className="input-field top-margin">
            <input
                // onChange={onChangeHandler}
                // value={title}
                ref={ref}
                type="text"
                id='title'
                placeholder="Add a new task"
                onKeyPress ={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Add a new task
          </label>
        </div>
    )
}
