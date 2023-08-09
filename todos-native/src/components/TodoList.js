import { useState } from 'react';
import { useSelector } from 'react-redux';
import Todos from './Todos'
import { Text, StyleSheet, View,Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function TodoList(){
  const [mode,setMode] = useState("all")
       return (/*
        <>
        <div className='radioButtons'>
          <label>
          <input type="radio" name="mode" checked={mode==="all"} value="all" onChange={handleMode} />
          All</label>
          <label>
          <input type="radio" name="mode" checked={mode==="active"} value="active" onChange={handleMode} />
          Active</label>
          <label>
          <input type="radio" name="mode" id='completed' checked={mode==="done"} value="done" onChange={handleMode} />
          Completed</label>
          </div>
          <div className='listWrapper' >
          {todos.loaders.getLoader 
            ? <div class="todosLoader lds-ring"><div></div><div></div><div></div><div></div></div>
            : <Todos mode={mode} />
          }
            
        </div>

        </>*/
        <View style={{flex: 1}}>
        <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{alignSelf:"center"}}>All</Text>
            <RadioButton
              value="all"
              status={ mode === 'all' ? 'checked' : 'unchecked' }
              onPress={() => setMode('all')}
            />
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{alignSelf:"center"}}s>Active</Text>
            <RadioButton
              value="active"
              status={ mode === 'active' ? 'checked' : 'unchecked' }
              onPress={() => setMode('active')}
            />
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{alignSelf:"center"}}s>Done</Text>
            <RadioButton
              value="done"
              status={ mode === 'done' ? 'checked' : 'unchecked' }
              onPress={() => setMode('done')}
            />
          </View>
        </View>
        <Todos mode={mode} />
        </View>
      );
  }

