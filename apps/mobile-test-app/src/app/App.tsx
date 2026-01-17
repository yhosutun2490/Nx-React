/* eslint-disable jsx-a11y/accessible-emoji */
import { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

const App = () => {
  const [text, setText] = useState<string>('');
  const [goalsList, setGoalsList] = useState<string[]>([]);
  const handleInputChange = (enteredText: string) => {
    setText(enteredText);
  };
  const handleAddGoal = () => {
    setGoalsList((currentGoals) => [...currentGoals, text]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add your goal"
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
        ></TextInput>
        <Button title="Add Goal" onPress={handleAddGoal}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>Goals Lists</Text>
        <ScrollView>
          {goalsList.map((goal, index) => (
            <View
              key={index}
              style={{ marginVertical: 8, padding: 8, backgroundColor: '#ccc' }}
            >
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 24,
    flex: 1,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
