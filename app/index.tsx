import { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";

export default function Index() {
  const textInputRef = useRef<TextInput>(null);
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

    console.log(textInputRef);
    textInputRef.current?.clear();
  };

  return (
    <View style={ styles.appContainer }>
      <View style={ styles.inputContainer }>
        <TextInput
          ref={textInputRef}
          placeholder="Your Course Goal"
          style={ styles.textInput }
          onChangeText={ goalInputHandler }
        ></TextInput>
        <Button title="Add Goal" onPress={ addGoalHandler } color={'#4CAF50'}></Button>
      </View>
      <View style={ styles.goalsContainer }>
          { courseGoals.map((goal: string) => <Text style={ styles.goalsComponent } key={goal}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1657/1657671.png" }} style={{ width: 20, height: 20, marginRight: 5 }}/>
            {goal}</Text>) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 5
  },
  goalsContainer: {
    flex: 5,
    padding: 6
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    width: "70%",
    marginRight: 8,
    padding: 13,
    borderRadius: 5
  },
  goalsComponent: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    elevation: 5
  }
});