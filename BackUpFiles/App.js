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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar style={styles.body} />
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>

          <View style={styles.body}>
            <View>
              <Text style={styles.textHere}>ACHANA TesT</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textHere: {
    color: '#212121',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: '600',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

export default App;
