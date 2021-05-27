import { useState } from "react";
import styles from './styles.module.css';

type Props = {
    addTask: (taskText: string) => void;
};

const AddTask = ({ addTask }: Props) => {

    const [taskText, setTaskText] = useState('');

    function createTask() {
        if (taskText.length > 0) {
            addTask(taskText);
            setTaskText('');
        } else {
            alert('The field is empty!')
        }

    }

    function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskText(event.target.value)
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            createTask();
        }
    }

    return (
        <div className={styles.addArea}>
            <input
                className={styles.inputAddTask}
                id="addTaskText"
                type="text"
                placeholder="Type your task here"
                onChange={handleChangeText}
                value={taskText}
                onKeyPress={handleKeyPress}
            />
            <button className={styles.buttonAddTask} type="button" onClick={createTask}>+</button>
        </div>
    )
}

export default AddTask
