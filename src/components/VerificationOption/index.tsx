import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { Colors } from '@/config/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { VerificationOptionProps } from '@/types/Components';

const VerificationOption: React.FC<VerificationOptionProps> = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.optionContainer}
            onPress={onPress}
        >
            <View style={styles.optionContent}>
                <Image source={icon} style={styles.optionIcon} />
                <Text style={styles.optionText}>{label}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.common.black} />
        </TouchableOpacity>
    )
}
export default VerificationOption;

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.common.grey,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 20,
        marginBottom: 20,
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
        color: Colors.common.black,
    },
});