import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
      <StatusBar barStyle='light-content'/>
    </View>
  );
}

//StatusBar customizada
//<StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow'
  }
});
