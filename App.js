/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

class App extends React.Component{

  constructor(){
    super()
    this.state = {}
    this.btnLoginPressed = this.btnLoginPressed.bind(this)
  }

  btnLoginPressed = () => {
    
  }


  render(){
    return(
      <View style={style.container}>
      <Text>{this.state.username}</Text>
      <Text>{this.state.password}</Text>
      <View>
        <Text style={style.label}>User Name</Text>
        <TextInput
        style={style.input}
        defaultValue={this.state.username}
        onChangeText={text => this.setState({username: text})}></TextInput>
      </View>

      <View>
        <Text style={style.label}>Password</Text>
        <TextInput
        style={style.input}
        defaultValue={this.state.password}
        onChangeText={text => this.setState({password: text})}></TextInput>
      </View>
      <Button title={'Login'} onPressed={this.btnLoginPressed}></Button>
      </View>
      )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1, justifyContent: 'center', padding: 20
  },
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1
  },
  label:{
    fontSize: 17,
    color: '#212121'
  }
  })

export default App;
