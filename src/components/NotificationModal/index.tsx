import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/config/Colors';

interface NotificationPromptProps {
    visible: boolean;
    title: string;
    disc: string;
    isTrack: boolean;
    onAllow: () => void;
}

const NotificationModal: React.FC<NotificationPromptProps> = ({
    visible,
    onAllow,
    title,
    disc,
    isTrack,
}) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onAllow}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.notificationPrompt}>
                    <Text style={styles.notificationTitle}>{title}</Text>
                    <Text style={styles.notificationText}>{disc}</Text>
                    <View style={{ borderWidth: 0.5, borderColor: Colors.common.grey, width: '100%' }} />
                    {isTrack ? (
                        <View style={[styles.notificationButtons, { flexDirection: 'column' }]}>
                            <TouchableOpacity style={styles.trackButton} onPress={onAllow}>
                                <Text style={styles.buttonText}>Ask App Not to Track</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trackButton} onPress={onAllow}>
                                <Text style={styles.buttonText}>Allow</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={[styles.notificationButtons, { flexDirection: 'row' }]}>
                            <TouchableOpacity style={styles.button} onPress={onAllow}>
                                <Text style={styles.buttonText}>Don't Allow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={onAllow}>
                                <Text style={styles.buttonText}>Allow</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default NotificationModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationPrompt: {
        backgroundColor: Colors.common.white,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: Colors.common.black,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        width: '70%',
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    notificationText: {
        fontSize: 14,
        color: Colors.common.grey,
        textAlign: 'center',
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    notificationButtons: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    button: {
        flex: 1,
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    trackButton: {
       padding: 6,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
        width: '100%',
    },
    buttonText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});
