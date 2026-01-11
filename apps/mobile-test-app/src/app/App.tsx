/* eslint-disable jsx-a11y/accessible-emoji */
import { useRef, useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { text } from 'stream/consumers';

const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Hello My First App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
export default App;