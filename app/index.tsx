import { useState, useRef } from "react";
import { StyleSheet, FlatList, View, Text, TextInput, Button, Image } from "react-native";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import CustomGoalItemUsingScrollView from "@/components/CustomGoalItemUsingScrollView";
import CustomGoalItemUsingFlatList from "@/components/CustomGoalItemUsingFlatList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<{ text: string; key: string; }[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) =>
      [
        ...currentCourseGoals,
        {text: enteredGoalText, key: Math.random().toString()}
      ]
    );
  };

  function generateGoals(length = 50) {
    return Array.from({ length: length}, (_, index) => ({
      text: `Goal ${index + 1}`,
      key: Math.random().toString(),
    }));
  }

  return (
    <View style={ styles.appContainer }>
      <GoalInput onAddGoal={addGoalHandler}/>
      {/* <Text style={ styles.goalsHeader }>List of Goals</Text>
      <CustomGoalItemUsingScrollView style={ styles.goalsContainer } goalsData={ generateGoals(500).map(goal => goal.text) }/> */}
      <FlatList style={ styles.goalsContainer } data={ generateGoals(500) } renderItem={(item) => {
        return <CustomGoalItemUsingFlatList text={item.item.text}/>
      }}/>
      {/* <FlatList style={ styles.goalsContainer } data={ courseGoals } renderItem={(item) => {
        return <GoalItem text={item.item.text}/>
      }}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingVertical: 6
  },
  
  goalsContainer: {
    flex: 5,
    paddingTop: 10,
  },

  goalsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: '#4CAF50',
    padding: 16,
  },

  goalListContainer: {
    flex: 1,
  }
});