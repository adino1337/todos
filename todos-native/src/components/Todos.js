import { useDispatch, useSelector } from 'react-redux';
import {updateTodo} from '../features/todosSlice'
import { TouchableOpacity, StyleSheet, View,Image,Text, FlatList, ScrollView } from 'react-native';

export default function Todos(props){

    const handleUpdate =  (itemToUpdate,action) => {
        const token = user.user.token
        dispatch(updateTodo({itemToUpdate,action,token}))
      
      }

const user = useSelector(state=>state.user)
const dispatch = useDispatch()
  

const todos = useSelector(state => state.todos)
const items = [...todos.todos]

return (
<View style={{flex: 1}}>
{items.length === 0 && 
<View style={styles.imageContainer}>
  <Image
  style={styles.image}
  source={require('./../images/noToDos.png')}
/>
  <Text style={{fontSize: 16, fontWeight: "bold", marginTop: 20}}>It's so empty in here</Text>
</View>
}
{items.length > 0 && 
<FlatList  
style= {{paddingTop: 20}}   
  data={items.sort((a, b) => Number(a.deleted) - Number(b.deleted))
  .filter((item) => {
    if(props.mode==="all")
      return true 
    if(props.mode == "active")
      return !item.deleted
    if(props.mode == "done")
      return item.deleted           
  })}      
  renderItem={({item}) => {
    let updateImg = item.deleted ? "'./../images/notChecked.png'" : "'./../images/checked.png'"
    let textDecoration = item.deleted ? "line-through" : "none"
    let statusImage = item.deleted ? require('./../images/checked.png') : require('./../images/notChecked.png')
    return (
    <View style={styles.todo} key={item._id}>
    <Text style={{alignSelf: "center", textDecorationLine: textDecoration}} >{item.text}</Text>
    <View style={styles.icons}>
    <TouchableOpacity onPress={() => handleUpdate(item,"update")}>
      <Image 
      style={styles.check}
      source={statusImage}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleUpdate(item,"delete")}>
      <Image 
       style={styles.delete}
       source={require('./../images/trash-solid.png')}
      />
    </TouchableOpacity>
    </View>
    </View>)
  }}
  />
  }
    </View>
)
}

const styles = StyleSheet.create({  
  imageContainer:{
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 220,
    height:  150,
    resizeMode: 'contain',
 },
  todo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#6e00ef"
  },
  icons:{
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center'
  },
   check: {
    
    width: 35,
    height:  35,
    resizeMode: 'contain',
 },
 delete: {
  width: 25,
  height:  25,
    resizeMode: 'cover',

}       
});