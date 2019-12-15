/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import control from './controls/Master.js'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import DataInputDisplay from './components/DataInputDisplay.js';
import ResultDisplay from './components/ResultDisplay.js'

class App extends React.Component{

  constructor(){
    super()
    this.state = {resultText: '', finalResult: '0'};
    this.operations = ['DEL', '+', '-', '*', '/'];
  }

  calculateResult = () => {
    const txt = this.state.resultText;
    this.setState({ finalResult: eval(txt)})
  }

  validate = () => {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;

    }
    return true;
  }

  btnPressedFunction = (text) => {
    if(text === '='){
      return this.validate() && this.calculateResult()
    }
    this.setState({resultText: this.state.resultText + text});
  }

  operate = (operation) =>{
    switch(operation){
      case 'DEL':
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({ resultText: text.join('') });
        break;
      case '+':
        //break;
      case '-':
        //break;
      case '*':
        //break;
      case '/':
        //break;
      const lastChar = this.state.resultText.split('').pop();

      if(this.operations.indexOf(lastChar) > 0) return;

      if(this.state.text == '') return;
      this.setState({resultText: this.state.resultText + operation})
    }
  }


  render(){
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for(let x = 0; x < 4; x++){
      let row = [];
      for(let j = 0; j < 3; j++){
        row.push(<TouchableOpacity onPress={() => this.btnPressedFunction(nums[x][j])}
        key={nums[x][j]} style={style.btn}>
                    <Text style={style.btnText}>{nums[x][j]}</Text>
                </TouchableOpacity>)
      }
      rows.push(<View key={x} style={style.row}>{row}</View>)
    }

    let ops = [];
    for(let f = 0; f < 5; f++){
      ops.push(<TouchableOpacity key={this.operations[f]} onPress={()=> this.operate(this.operations[f])} style={style.btn}>
                  <Text style={[style.btnText, style.white]}>{this.operations[f]}</Text>
              </TouchableOpacity>)
    }
    return(
      <View style={style.container}>
          <DataInputDisplay text={this.state.resultText}/>
        <View style={style.calculation}>
          <Text style={style.calculationText}>{this.state.finalResult}</Text>
        </View>
        <View style={style.buttons}>
          <View style={style.numbers}>
            {rows}
          </View>
          <View style={style.operations}>
            {ops}
          </View>
        </View>
      </View>
      )
  }
}

const style = StyleSheet.create({
  row: {flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'},
  container:{ flex: 1 },
  white:{color: 'white'},
  btn: {flex: 1, alignItems: 'center', alignSelf: 'stretch', justifyContent: 'center'},
  btnText: {fontSize: 30, color: 'white'},
  result: { flex: 2, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'flex-end' },
  calculation:{ flex: 1, backgroundColor: '#023658', justifyContent: 'center', alignItems: 'flex-end' },
  numbers: {flex: 3, backgroundColor: '#434343', color: 'white'},
  buttons:{ flexDirection: 'row', flex: 6},
  input: { height: 40, borderColor: 'gray', borderWidth: 1 },
  operations: {flex: 1, backgroundColor: '#636363', justifyContent: 'space-around', alignItems: 'center'},
  resultText:{fontSize: 30, color: 'white'},
  calculationText: {fontSize: 24, color: 'white'}
  })

export default App;
