import { useDispatch } from "react-redux"
import { updateFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      let filter = event.target.value.toString()
      dispatch(updateFilter(filter))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter