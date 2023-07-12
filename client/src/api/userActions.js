export async function register({email,password}){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password})
      };
      const response = await fetch('http://localhost:5000/todos/user/register', requestOptions);
      return await response.json();
}


export async function login({email,password}){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password})
      };
      const response = await fetch('http://localhost:5000/todos/user/login', requestOptions);
      return await response.json();
}

