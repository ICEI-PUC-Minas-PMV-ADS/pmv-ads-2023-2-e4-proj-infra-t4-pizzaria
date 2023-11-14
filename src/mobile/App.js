import { StatusBar } from 'react-native';
import Pedidos from './src/screens/Pedidos';

export default function App() {
  return (
    <>
      <Pedidos/>
      <StatusBar barStyle="light-content" />
    </>
  );
}

