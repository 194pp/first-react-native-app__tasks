import React, {useState} from 'react';
import {
  View, StyleSheet, Button, TextInput,
  Modal, TouchableOpacity, TouchableWithoutFeedback
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animation='slide' transparent>
      <TouchableOpacity onPress={props.onCancel} style={styles.backdrop}>
        <TouchableWithoutFeedback onPress={() => null}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"Course goal"}
              style={styles.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title='Add'
                  onPress={addGoalHandler}
                  color='green'
                />
              </View>
              <View style={styles.button}>
                <Button
                  title='Cancel'
                  color='red'
                  onPress={props.onCancel}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 20,
    borderRadius: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    width: '45%',
  },
});

export default GoalInput;
