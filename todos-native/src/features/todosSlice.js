import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ip = "192.168.1.15"
export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (token) => {  
    try{
        const requestOptions = {
          method: 'GET',
          headers: {'Authorization': token},
        };
        const response = await fetch(`http://${ip}:5000/todos`,requestOptions);
        const todos = await response.json();
        return todos
      }
      catch(err){
        return "Something went wrong :(";
      }
     }
      
  );

  
export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async ({newItem, token}) => {  
        try{
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json','Authorization': token},
              body: JSON.stringify(newItem)
            };
            const response = await fetch(`http://${ip}:5000/todos`, requestOptions);
            const todo = await response.json();
            return todo
          }
          catch(err){
            return "Something went wrong :(";
        }
     }      
  );

  export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({itemToUpdate,e,token}) => {  
      if(e.target.id === "deleteBtn"){
        try {
          const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': token },
            
          };
          await fetch(`http://${ip}:5000/todos` + itemToUpdate._id, requestOptions);
          return {mode: "delete", id: itemToUpdate._id}
        } catch (err) {
          return "Something went wrong :(";
        }
      }
      else{
      try {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': token },
          body: JSON.stringify({ deleted: !itemToUpdate.deleted })
        };
         await fetch(`http://${ip}:5000/todos` + itemToUpdate._id, requestOptions);
         return {mode: "put", id: itemToUpdate._id}

      } catch (err) {
        return "Something went wrong :(";
      }
    }
     }      
  );

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loaders: {
        getLoader: false,
        postLoader: false,
    },
    todos: [],    
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loaders.getLoader = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loaders.getLoader = false;
        state.todos = action.payload.data;
        console.log(action.payload.data);
      })
      .addCase(getTodos.rejected, (state) => {
        state.error = "Something went wrong :("
      })
      .addCase(addTodo.pending, (state) => {
        state.loaders.postLoader = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loaders.postLoader = false;
        if(action.payload.code === 401)
            state.error = action.payload.message
        else
        state.todos = ([...state.todos, action.payload.data]);
      })
      .addCase(addTodo.rejected, (state) => {
        state.error = "Something went wrong :("
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const {mode,id} = action.payload
        if(mode === "put")
        {
          state.todos =  state.todos.map((item) => {
            if (item._id === id) 
              return { ...item, deleted: !item.deleted };
             else 
              return item;
            })
        }
        else{
          state.todos = state.todos.filter(item => item._id !== id)
        }
      })
      .addCase(updateTodo.rejected, (state) => {
        state.error = "Something went wrong :("
      });
  },
});

export default todosSlice.reducer;