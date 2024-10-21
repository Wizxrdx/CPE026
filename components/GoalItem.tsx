import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConfirmationModal from '@/components/ConfirmationModal';

function GoalItem(props: any) {
    const [modalVisible, setModalVisible] = useState(false);
    
    function deleteGoalHandler() {
        props.onDeleteGoal(props.id);
        setModalVisible(false);
    }

    return (<View style={ styles.goalsComponent }>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1657/1657671.png" }} style={{ width: 20, height: 20, marginRight: 5 }}/>
            <Text style={ styles.goalText }>{props.text}</Text>
            <Pressable onPress={() => {setModalVisible(true)} }>
                <Icon name="delete" style={ styles.deleteComponent } />
            </Pressable>

            <ConfirmationModal
                visible={modalVisible}
                onConfirm={deleteGoalHandler}
                onCancel={() => setModalVisible(false)}
            />
        </View>);
};

const styles = StyleSheet.create({
    goalsComponent: {
        padding: 10,
        marginBottom: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    goalText: {
        flex: 1,
    },
    deleteComponent: {
        fontSize: 25,
        
    }
});

export default GoalItem;