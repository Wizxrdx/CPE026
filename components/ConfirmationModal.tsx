import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

function ConfirmationModal(props: any) {
    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.confirmText}>Are you sure you want to delete this goal?</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={props.onCancel} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={props.onConfirm} style={styles.confirmButton}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </Pressable>
                    </View>
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
    confirmText: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    confirmButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default ConfirmationModal;
