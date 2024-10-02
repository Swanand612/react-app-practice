// when to use the reducer function?
/**
 * 
 * when state needs to be set multiple times throughout the component, its best to just dispatch event from the handleChange functions, 
 * while setting the state in a reducer function. 
 * reducer function will listen to the dispatch event, and set the state accordingly
 * reducer function will be written outside of the component as a helper
 */

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

import { useReducer } from "react"

export default function Task() {

    // const [tasks, setTasks] = useState(initialTasks);
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: 'add',
            id: nextId++,
            text: text
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            id: taskId
        })
    }
    return (
        <div>
            <AddList onAddTask={handleAddTask} />
            <TaskList task={task} onChange={handleChangeTask} onDelete={handleDeleteTask}/>
        </div>
    )
}

function taskReducer(tasks, action) {
    if(action.type === 'added') {
        return [
            ...tasks,
            {
                id: action.id,
                text: action.text,
                done: false,
            }
        ]
    } else if (action.type === 'changed') {
        return tasks.map(task => {
            if(task.id === action.task.id) {
                return action.task;
            } else {
                return task;
            }
        })
    } else if (action.type === 'deleted') {
        return tasks.filter(t => t.id !== action.id);
    } else {
        throw Error('Unknown action: ' + action.type);
    }
}