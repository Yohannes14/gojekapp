import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Colors } from '@/config/Colors';
import { FONT } from '@/utils/fonts';
import { InputFieldProps } from '@/types/Components';

const CustomTextInput: React.FC<InputFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    isValid,
    keyboardType = 'default',
    secureTextEntry = false,
    errorMessage = '',
}) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>
                {label}
                <Text style={{ color: Colors.error }}>*</Text>
            </Text>
            <TextInput
                style={[styles.inputField, !isValid && styles.invalidInput]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Colors.common.black}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            {!isValid && errorMessage && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 20,
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: Colors.common.black,
        marginBottom: 8,
        fontFamily: FONT.SEMI_BOLD,
    },
    inputField: {
        fontSize: 16,
        borderBottomWidth: 1,
        paddingVertical: 8,
        color: Colors.common.black,
    },
    invalidInput: {
        borderColor: Colors.error,
    },
    errorText: {
        fontSize: 12,
        color: Colors.error,
        marginTop: 5,
    },
});

export default CustomTextInput
