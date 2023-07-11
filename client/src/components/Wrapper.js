export default function Wrapper(props){  
 
  return (
    <div>
      <nav className={props.isLogged && "right"}>
        {props.isLogged && <div className='logout'>
        <p>{props.user.email}</p><a onClick={props.logoutHandle}>logout</a></div>
        }
        {!props.isLogged && <h2>ToDo's</h2>}
      </nav>
      {props.children}            
    </div>
  );
}