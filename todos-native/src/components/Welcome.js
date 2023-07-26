import { StyleSheet,Text, Image, View, TextInput,Alert } from 'react-native';

export default function Welcome(){  
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/security.png')}
            />
            <Text style={styles.title}>Welcome to ToDo's</Text>
            <Text>Have your tasks in one place!</Text>
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {    
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        marginBottom: 50,
        width: 220,
        height:  150,
        resizeMode: 'contain'
     },
     title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
     }
  });

