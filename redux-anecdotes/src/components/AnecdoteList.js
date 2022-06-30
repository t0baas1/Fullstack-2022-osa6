import { useDispatch, useSelector } from "react-redux"
import { addVote } from '../reducers/anecdoteReducer'
import { voteNotif } from '../reducers/notificationReducer'
import { deleteNotif } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, vote }) => {
    return(
        <div>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={vote}>vote</button>
            </div>
        </div>
    )
}


const Anecdotes = () => {
    const dispatch = useDispatch()
    let anecdotes = useSelector(state => state.anecdotes)
    let filter = useSelector(state => state.filter)
    console.log(anecdotes)

    if (filter !== null) {
        anecdotes = anecdotes.filter(anec => anec.content.toUpperCase().includes(filter.toUpperCase()))
    }

    
const notifHandler = () => {
    setTimeout(() => {
        dispatch(deleteNotif())
    }, 5000);

}

    return(
        <div>
            {anecdotes.slice().sort((a, b) => b.votes - a.votes).map(anecdote =>
                <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                vote={() => dispatch(addVote(anecdote.id), dispatch(voteNotif(anecdote)), notifHandler())}
                />
            )}
        </div>
    )
}

export default Anecdotes