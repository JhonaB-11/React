import * as React from 'react';
import { View,Button,StyleSheet,Dimensions,TextInput, Text} from 'react-native';
function LoginScreen({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.headerLeft}>
            <Text style={styles.text}>
                Bienvenido
            </Text>
          </View>
            <View style={styles.container}>
                <TextInput placeholderTextColor="#000000" placeholder="User" style={styles.textInput}></TextInput>
                <TextInput placeholderTextColor="#000000" placeholder="Password" style={styles.textInput}></TextInput>
            </View>

            <View style={styles.headerRight}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
          </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    container2:{
      alignItems: 'center',
      backgroundColor:'#fffff',
      borderRadius:20,
      position:'absolute',
    },
    textInput:{
    borderWidth:1,
    width:200,
    height:50,
    color:'#000000',
    borderRadius:20,
    paddingLeft:10,
    paddingRight:5,
    marginTop:15,
    marginBottom:10,
    backgroundColor:'#ffffff',
    opacity:.5,
    },
    headerRight:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    headerLeft:{
        flex:1,
        backgroundColor: '#303F9F',
        alignItems:'center'
    },
    text:{
        fontSize:40,
        fontFamily:"sans-serif",
        color:"#fffff",
        textAlign:"center",
        marginTop:Dimensions.get("window").width*.3,
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    
      },
  });
  export default LoginScreen;