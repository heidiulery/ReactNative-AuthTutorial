import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // for ios
    elevation: 10, // for android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };