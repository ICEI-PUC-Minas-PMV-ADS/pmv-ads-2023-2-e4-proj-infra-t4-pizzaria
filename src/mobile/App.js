import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Navigation'; 
import { store, persistor } from './src/redux/store'; 

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </>
      </PersistGate>
    </Provider>
  );
}
