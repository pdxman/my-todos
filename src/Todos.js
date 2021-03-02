import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Todos(){
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks ] = useState([])

    const addTask = () => {
        setTasks([...tasks, {taskText, id: uuidv4() }])
    }

    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask])
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    const updateTaskText = event => {
        setTaskText(event.target.value)
    }

    console.log(tasks)
    console.log('completed', completedTasks)

    return(
        <div>
            <h1>Today's Stuff</h1>
            <div className="form">
                <input value={taskText} onChange={updateTaskText}/>
                <button onClick={addTask}>ADD!</button>
            </div>
            <div className="task-wrap">
                <div className="task-list">
                    <h3>On The List</h3>
                    {
                            tasks.map(task => {
                                const {id, taskText} = task
                                return <p key={id} onClick={completeTask(task)}>{taskText}</p>
                            })
                    }
                    
                </div>
                    <div className="completed-list">
                          <h3>Completed!</h3>  
                        {
                        completedTasks.map(task => {
                            const {id, taskText} = task

                            return(
                                <p key={id}>{taskText}</p>
                            )
                        })
                    }</div>
            </div>        
        </div>
    )

}

export default Todos