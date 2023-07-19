import noToDos from './../images/noToDos.png'
import checked from './../images/checked.svg'
import notChecked from './../images/notChecked.svg'
import trash from './../images/trash-solid.svg'
import { useDispatch, useSelector } from 'react-redux';
import {updateTodo} from '../features/todosSlice'

export default function Todos(props){

    const handleUpdate =  (itemToUpdate,e) => {
        const token = user.user.token
        dispatch(updateTodo({itemToUpdate,e,token}))
      
      }

const user = useSelector(state=>state.user)
const dispatch = useDispatch()
  

const todos = useSelector(state => state.todos)
const items = [...todos.todos]

return (
<>
{items.length === 0 && <img className='noContent' src={noToDos} alt="noToDos" />}
{items.length > 0 && 
<div className='list'>          
  {items.sort((a, b) => Number(a.deleted) - Number(b.deleted))
  .filter((item) => {
    if(props.mode==="all")
      return true 
    if(props.mode == "active")
      return !item.deleted
    if(props.mode == "done")
      return item.deleted           
  }).map((item) => (
    <div className='item' key={item._id} onClick={(e) => handleUpdate(item,e)}>
    <div className='text'>{item.text}</div>
    <span className='actions'>
      <img className='icon' src={item.deleted ? checked : notChecked} alt="done" />
      <img id='deleteBtn' src={trash} alt="delete" />
      </span>
      </div>
  ))}
    </div>}
    </>
)
}