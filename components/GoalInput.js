import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.inputButton} onPress={addGoalHandler}>
            <Text style={styles.blueColor}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputButtonClose}
            onPress={props.onCancel}
          >
            <Text style={styles.redColor}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputButton: {
    width: "50%",
    alignItems: "center",
    padding: 10,
  },
  inputButtonClose: {
    width: "50%",
    alignItems: "center",
    padding: 10,
  },
  buttonsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redColor: {
    color: "red",
  },
  blueColor: {
    color: "blue",
  },
});

export default GoalInput;
