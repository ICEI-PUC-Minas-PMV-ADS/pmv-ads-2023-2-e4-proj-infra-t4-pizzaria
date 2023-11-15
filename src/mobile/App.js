import { StatusBar } from 'react-native';
import Pedidos from './src/screens/Pedidos';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      <Login/>
      <StatusBar barStyle="light-content" />
    </>
  );
}

