import { useRef, useState } from 'react';
import { View, TextInput, Image, StyleSheet, Button } from 'react-native';

function GoalInput(props: any) {
    const textInputRef = useRef<TextInput>(null);
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText : string) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        textInputRef?.current?.clear();
    };

    return (
        <View style={ styles.inputContainer }>
        <TextInput
          ref={textInputRef}
          placeholder="Your Course Goal"
          style={ styles.textInput }
          onChangeText={ goalInputHandler }
        ></TextInput>
        <Button title="Add Goal" onPress={ addGoalHandler } color={'#4CAF50'}/>
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 10
    },

    textInput: {
        borderWidth: 2,
        borderColor: "#ddd",
        width: "75%",
        marginRight: 5,
        padding: 10,
        borderRadius: 5
    },
});

export default GoalInput;