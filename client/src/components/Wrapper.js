import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';

export default function Wrapper(props){  

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const logoutHandle = () => {
    dispatch(logout())
    localStorage.clear();
  }
  return (
    <div>
      <nav className={!user.loggedOut ? "right" : ""}>
        {!user.loggedOut && <div className='logout'>
        <p>{user.user.email}</p><a onClick={logoutHandle}>logout</a></div>
        }
        {user.loggedOut && <h2>ToDo's</h2>}
      </nav>
      {props.children}            
    </div>
  );
}