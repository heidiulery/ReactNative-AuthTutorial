import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'}/>
      </View>
    );
  }
}

export default App;