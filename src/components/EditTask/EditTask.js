import { useState } from 'react';
import styles from './styles.module.css';

const EditTask = ({ editTask, stateTaskEdited }) => {

    const [taskEdited, setTaskEdited] = stateTaskEdited;

    function handleOnChange(event) {
        setTaskEdited({ id: taskEdited.id, text: event.target.value });
    }

    function closeDialog() {
        setTaskEdited({});
    }

    function updateTask() {
        if (taskEdited.text.length > 0) {
            editTask(taskEdited);
            setTaskEdited({});
        } else {
            alert('The field is empty!')
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            updateTask();
        }
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalBody} >
                <div className={styles.modalHeader} >
                    <button type="button" onClick={closeDialog}>&#215;</button>
                </div>
                <div className={styles.modalMain} >
                    <input type='text' placeholder="Type your task here" onChange={handleOnChange} onKeyPress={handleKeyPress} value={taskEdited.text} />
                    <button type="button" onClick={updateTask}>&#10003;</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask