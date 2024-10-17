import { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";

export default function App() {
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
        <Text style={ styles.goalsHeader }>List of Goals</Text>
          { courseGoals.map((goal: string) => 
            <View style={ styles.goalsComponent } key={goal}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1657/1657671.png" }} style={{ width: 20, height: 20, marginRight: 5 }}/>
              <Text>{goal}</Text>
            </View>
          ) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingVertical: 12
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    elevation: 5
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#ddd",
    width: "75%",
    marginRight: 5,
    padding: 10,
    borderRadius: 5
  },
  
  goalsContainer: {
    flex: 5,
    marginVertical: 8
  },

  goalsHeader: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    backgroundColor: '#4CAF50',
    padding: 16,
  },

  goalsComponent: {
    padding: 15,
    marginBottom: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    elevation: 5,
    flexDirection: "row",
  }
});