import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

function WarningModal(props: any) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.warningText}>Warning: You may be overwhelming yourself with too much burden.</Text>
                    <Text style={styles.instructionText}>Please take a moment to breathe and assess your priorities.</Text>
                    <Pressable onPress={props.onClose} style={styles.closeButton}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    warningText: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    instructionText: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#f44336',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default WarningModal;
