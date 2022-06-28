import { useDispatch, useSelector } from "react-redux"
import { addVote } from '../reducers/anecdoteReducer'

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
    const anecdotes = useSelector(state => state.anecdotes)
    console.log(anecdotes)

    return(
        <div>
            {anecdotes.slice().sort((a, b) => b.votes - a.votes).map(anecdote =>
                <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                vote={() => dispatch(addVote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default Anecdotes