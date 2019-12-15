import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import control from '../controls/Master.js'

class ResultDisplay extends React.Component{

  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  btnPressedFunction = (txt) => {
    if(txt === '='){
      return this.calculateResult()
    }
    this.setState({text: this.props.text + txt})
  }

  render(){
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for(let x = 0; x < 4; x++){
      let row = [];
      for(let j = 0; j < 3; j++){
        row.push(<TouchableOpacity onPress={() => this.btnPressedFunction(nums[x][j])} key={control.codeGenerator('bt', 5)} style={style.btn}><Text style={style.btnText}>{nums[x][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={style.row}>{row}</View>)
    }
    // return(<View>{rows}</View>)
    return rows;
  }
}

const style = StyleSheet.create({
  row: {flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'},
  container:{ flex: 1 },
  white:{color: 'white' },
  btn: {flex: 1, alignItems: 'center', alignSelf: 'stretch', justifyContent: 'center'},
  btnText: {fontSize: 30, },
  result: { flex: 2, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'flex-end' },
  calculation:{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'flex-end' },
  numbers: {flex: 3, backgroundColor: 'yellow'},
  buttons:{ flexDirection: 'row', flex: 6},
  input: { height: 40, borderColor: 'gray', borderWidth: 1 },
  operations: {flex: 1, backgroundColor: 'black', justifyContent: 'space-around', alignItems: 'center'},
  resultText:{fontSize: 30, color: 'white'},
  calculationText: {fontSize: 24, color: 'white'}
  });

export default ResultDisplay;
