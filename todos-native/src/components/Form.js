import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo} from '../features/todosSlice'
import { StyleSheet,Text, TouchableOpacity, View, TextInput, } from 'react-native';
import { Isao } from 'react-native-textinput-effects';

export default function Forms() {
  const dispatch = useDispatch()
  

  const todos = useSelector(state => state.todos)
  const user = useSelector(state => state.user)

  const items = todos.todos
  const token = user.user.token
  
  const [text,setText] = useState("")
    
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text: text,
      deleted: false
    };
    dispatch(addTodo({newItem, token}));
    setText("")
    
  }
    return (/*
    <form className='toDoForm' onSubmit={handleSubmit}>
      <div className='input'>
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}    
          required              
        />
        <span className='placeholder'>New todo</span>
        </div>
        <button className='todoFormBtn'>{
          todos.loaders.postLoader
          ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          : <div class="lds-ring">Add #{items.length + 1}</div>
          }
        </button>
      </form>*/
        <View style={styles.form}>
          <Isao
              label={'new task'}
              activeColor={'#6e00ef'}
              borderHeight={4}
              inputPadding={12}
              labelHeight={24}
              passiveColor={'#101010'}
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => setText(text)}
              value={text}
            />
            
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    
    form:{
      padding: 20
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#6e00ef',
      padding: 15,
      marginTop:20
    },
    btnText:{
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    }
  });