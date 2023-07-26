import { useDispatch, useSelector } from 'react-redux';
import {updateTodo} from '../features/todosSlice'
import { SafeAreaView, StyleSheet, View,Image,Text } from 'react-native';

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
<View>
{items.length === 0 && 
  <Image
  style={styles.image}
  source={require('./../images/noToDos.png')}
/>
}
{items.length > 0 && 
<View>          
  {items.sort((a, b) => Number(a.deleted) - Number(b.deleted))
  .filter((item) => {
    if(props.mode==="all")
      return true 
    if(props.mode == "active")
      return !item.deleted
    if(props.mode == "done")
      return item.deleted           
  }).map((item) => {
  const url = item.deleted ? './../images/checked.png' : './../images/notChecked.png'
  (
    <View key={item._id} onPress={(e) => handleUpdate(item,e)}>
    <Text >{item.text}</Text>
    <View>
    <Image
      style={styles.check}
      source={require(url)}
    />
    <Image
      style={styles.delete}
      source={require('./../images/trash-solid.png')}
    />
      </View>
      </View>
  )})}
    </View>}
    </View>
)
}

const styles = StyleSheet.create({  
  image: {
      marginBottom: 50,
      width: 220,
      height:  150,
      resizeMode: 'contain'
   },
   check: {
    marginBottom: 50,
    width: 220,
    height:  150,
    resizeMode: 'contain'
 },
 delete: {
  marginBottom: 50,
  width: 220,
  height:  150,
  resizeMode: 'cover'
}       
});