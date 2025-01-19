import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/config/Colors';

interface ClearInputFieldProps {
    onPress: () => void;
}

const CleanInputField: React.FC<ClearInputFieldProps> = ({
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.removeIcon}>
            <Ionicons name="close-circle" size={20} color={Colors.common.grey} />
        </TouchableOpacity>
    )
}

export default CleanInputField;
const styles = StyleSheet.create({

    removeIcon: {
        position: 'absolute',
        right: 0,
        top: 10,
    },

});
