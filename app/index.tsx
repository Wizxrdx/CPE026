import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={ styles.appContainer }>
      <View style={ styles.inputContainer }>
        <TextInput
          placeholder="Your Course Goal"
          style={ styles.textInput }
          onChangeText={ goalInputHandler }
        ></TextInput>
        <Button title="Add Goal" onPress={ addGoalHandler }></Button>
      </View>
      <View style={ styles.goalsContainer }>
          { courseGoals.map((goal: string) => <Text key={goal}>{goal}</Text>) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 13
  }
});