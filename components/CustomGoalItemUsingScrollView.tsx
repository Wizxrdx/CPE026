import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function CustomGoalItemUsingScrollView(props: any) {
    return (
        <ScrollView style={ props.style }>
          {props.goalsData.map((text: string, key: number) => (
              <View style={ styles.goalsComponent } key={ key }>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1657/1657671.png" }} style={{ width: 20, height: 20, marginRight: 5 }}/>
                <Text>{text}</Text>
            </View>
          ))}
        </ScrollView>
      );
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

export default CustomGoalItemUsingScrollView;
