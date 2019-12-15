import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';

class DataInputDisplay extends React.Component{
  render(){
    return(
      <View style={style.result}>
        <Text style={style.resultText}>{this.props.text}</Text>
      </View>)
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

export default DataInputDisplay;
