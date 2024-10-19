import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function CustomGoalItemUsingFlatList(props: any) {
    return <View style={ styles.goalsComponent }>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1657/1657671.png" }} style={{ width: 20, height: 20, marginRight: 5 }}/>
        <Text>{props.text}</Text>
    </View>
};

const styles = StyleSheet.create({
    goalsComponent: {
        padding: 15,
        marginBottom: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        elevation: 5,
        flexDirection: "row",
      },
});

export default CustomGoalItemUsingFlatList;