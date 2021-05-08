import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert("Please add a task")
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='mt-2' onSubmit={onSubmit}>
            <label htmlFor="taskName" className="form-label mt-4">Task name</label>
            <input type="text" className="form-control" id="taskName" value={text} onChange={(e) => setText(e.target.value)}></input>

            <label htmlFor="dateAndTime" className="form-label mt-4">Day and time</label>
            <input type="text" className="form-control" id="dateAndTime" value={day} onChange={(e) => setDay(e.target.value)}></input>

            <div className="mt-4 form-check">
                <input type="checkbox" className="form-check-input" id="reminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
                <label className="form-check-label" htmlFor="reminder">Reminder</label>
            </div>

            <input type='submit' className="form-control btn btn-outline-dark mt-4" value='Add Task' />
        </form>
    )
}

export default AddTask
