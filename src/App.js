import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { apiKey } from './env';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: `${apiKey}`,
      authDomain: "auth-c36b3.firebaseapp.com",
      databaseURL: "https://auth-c36b3.firebaseio.com",
      projectId: "auth-c36b3",
      storageBucket: "auth-c36b3.appspot.com",
      messagingSenderId: "860452684888"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    } 
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;