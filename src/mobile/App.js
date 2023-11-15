import { StatusBar } from 'react-native';
import Pedidos from './src/screens/Pedidos';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      <Pedidos/>
      <StatusBar barStyle="light-content" />
    </>
  );
}

