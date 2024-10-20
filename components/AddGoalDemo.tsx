import { Pressable, Text } from "react-native";

function AddGoalDemo(props: any) {
    return (<Pressable
        android_disableSound={true}
        android_ripple={{ color: 'red' }}
        children={<Text>Add Goal</Text>}
        unstable_pressDelay={0}
        delayLongPress={500}
        disabled={false}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        onLongPress={() => {}}
        onPress={props.onPress}
        onPressIn={() => {}}
        onPressOut={() => {}}
        pressRetentionOffset={{top: 20, bottom: 20, left: 20, right: 20}}
        style={{flex: 1}}
        testOnly_pressed={false}
        />
    )
}

export default AddGoalDemo;