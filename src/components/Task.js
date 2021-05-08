import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <li className={` list-group-item list-group-item${task.reminder ? '-success' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{task.text}</h5>
                <p><FaTimes style={{ cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></p>
            </div>
            <p className="mb-1">{task.day}</p>
        </li>
    )
}

export default Task
