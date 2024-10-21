import { useState, useRef } from "react";
import { StyleSheet, FlatList, View, Text, TextInput, Button, Image } from "react-native";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import CustomGoalItemUsingScrollView from "@/components/CustomGoalItemUsingScrollView";
import CustomGoalItemUsingFlatList from "@/components/CustomGoalItemUsingFlatList";
import CustomModal from "@/components/CustomModal";
import WarningModal from "@/components/WarningModal";
import WelcomeModal from "@/components/WelcomeModal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<{ text: string; key: string; }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText: string) {
    console.log(courseGoals.length);
    if (courseGoals.length >= 5) {
      setModalVisible(true);
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  };

  function deleteGoalHandler(goalKey: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(goal => goal.key !== goalKey);
    });
  }

  function generateGoals(length = 500) {
    return Array.from({ length: length}, (_, index) => ({
      text: `Goal ${index + 1}`,
      key: Math.random().toString(),
    }));
  }

  return (
    <View style={ styles.appContainer }>
      <GoalInput onAddGoal={addGoalHandler}/>
      <Text style={ styles.goalsHeader }>List of Goals</Text>

      {/* <View style={ styles.goalsContainer }>
        <CustomGoalItemUsingScrollView goalsData={ generateGoals().map(goal => goal.text) }/>
      </View>
      <View style={ styles.goalsContainer }>
      <FlatList style={ styles.goalsContainer } data={ generateGoals() } renderItem={(item) => {
        return <CustomGoalItemUsingFlatList text={item.item.text}/>
        }}/>
        </View> */}
        
      <FlatList style={ styles.goalsContainer } data={ courseGoals } renderItem={(item) => {
        return <GoalItem id={item.item.key} text={item.item.text} onDeleteGoal={deleteGoalHandler}/>
      }}/>
      <WelcomeModal/>
      <WarningModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
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
    // flex: 5,
    paddingTop: 10,
    height: 350
  },

  goalsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: '#4CAF50',
    padding: 16,
  }
});