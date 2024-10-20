import { Pressable, Text, StyleSheet } from "react-native";

function AddGoal(props: any) {
    return (
    <Pressable
        style={({ pressed }) =>
            pressed ? styles.pressableComponentPressed : styles.pressableComponent
        }
        onPress={props.onPress}>
        <Text>Add Goal</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    pressableComponent: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    pressableComponentPressed: {
        flex: 1,
        backgroundColor: '#388E3C',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    }
});

export default AddGoal;