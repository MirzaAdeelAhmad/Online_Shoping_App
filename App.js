import {View, Text} from 'react-native';
import React from 'react';
import MainContainer from './src/Component/MainContainer';
import store from './src/Store/Store';
import {Provider} from 'react-redux';
import {StripeProvider} from '@stripe/stripe-react-native';
const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
