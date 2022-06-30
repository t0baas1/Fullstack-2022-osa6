import {useDispatch} from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { createNotif } from '../reducers/notificationReducer'
import { deleteNotif } from '../reducers/notificationReducer'

const NewAnec = (props) => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault();
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnec(content))
        dispatch(createNotif(content))
        setTimeout(() => {
            dispatch(deleteNotif())
        }, 5000);
    }

    return (
        <div>
            <h2>create new</h2>
                <form onSubmit={addAnec}>
                    <div><input name="anec" /></div>
                    <button type="submit">create</button>
                </form>
        </div>
    )
}

export default NewAnec