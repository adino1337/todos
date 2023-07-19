import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import todosReducer from '../features/todosSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer
  }
})