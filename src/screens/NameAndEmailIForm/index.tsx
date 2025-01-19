import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '@/styles/GlobalStyles';
import CustomHeader from '@/components/CustomHeader';
import { goBack } from '@/navigation/RootNavigation';
import { Colors } from '@/config/Colors';
import { FONT } from '@/utils/fonts';
import CustomButton from '@/components/Button/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import CleanInputField from '@/components/CLeanInputField';

export default function NameAndEMailFormScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isNameEntered, setIsNameEntered] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = (text: string) => {
        const regex = /^[A-Za-z\s]*$/;
        if (regex.test(text) || text === '') {
            setName(text);
        }
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
        validateEmail(text);
    };

    const validateEmail = (email: string) => {
        // Basic email regex validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsEmailValid(emailRegex.test(email));
    };

    const handleNext = () => {
        // Navigate to the next screen or perform any action
        // Alert.alert("Success", "Email is valid");
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const clearName = () => setName('');
    const clearEmail = () => setEmail('');

    return (
        <View style={globalStyles.container}>
            <CustomHeader
                onBackPress={goBack}
                onHelpPress={() => Alert.alert('Help', 'Need help? Contact support!')}
            />

            {/* Display Name Input first */}
            {!isNameEntered ? (
                <>
                    <Text style={styles.title}>What's your name?</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Name<Text style={{ color: Colors.error }}>*</Text>
                        </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.inputField}
                                value={name}
                                onChangeText={handleNameChange}
                                placeholder="Latin alphabet, no emoji or symbols"
                                placeholderTextColor={Colors.common.black}
                            />
                            {name.length > 0 && (
                                <CleanInputField onPress={clearName} />
                            )}
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <CustomButton
                            onPress={() => setIsNameEntered(true)}
                            style={{
                                marginVertical: 10,
                                backgroundColor: name ? Colors.button.primary : Colors.button.disabled,
                            }}
                            buttonStyle={{
                                marginVertical: 12,
                                color: name ? Colors.common.white : Colors.common.grey,
                            }}
                            title="Save"
                            loading={false}
                            disabled={!name}
                        />
                    </View>
                </>
            ) : (
                // Display Email Input after Name is entered
                <>
                    <Text style={styles.title}>And, your email?</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Email<Text style={{ color: Colors.error }}>*</Text>
                        </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.inputField}
                                value={email}
                                onChangeText={handleEmailChange}
                                placeholder="E.g, yourname@gmail.com"
                                placeholderTextColor={Colors.common.black}
                                keyboardType="email-address"
                            />
                            {email.length > 0 && (
                                <CleanInputField onPress={clearEmail} />
                            )}
                        </View>
                    </View>

                    {/* Display error if email is invalid */}
                    {!isEmailValid && (
                        <Text style={styles.errorText}>Please enter a valid email address.</Text>
                    )}

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <CustomButton
                            onPress={handleNext}
                            style={{
                                marginVertical: 10,
                                backgroundColor: isEmailValid && email ? Colors.button.primary : Colors.button.disabled,
                            }}
                            buttonStyle={{
                                marginVertical: 12,
                                color: isEmailValid && email ? Colors.common.white : Colors.common.grey,
                            }}
                            title="Save"
                            loading={isLoading}
                            disabled={!isEmailValid || !email}
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: FONT.BOLD,
        marginTop: 20,
        color: Colors.common.black,
    },
    label: {
        fontSize: 14,
        color: Colors.common.black,
        marginBottom: 10,
        fontFamily: FONT.SEMI_BOLD,
    },
    inputContainer: {
        marginTop: 40,
        width: '100%',
    },
    inputWrapper: {
        position: 'relative',
    },
    inputField: {
        fontSize: 18,
        borderBottomWidth: 0.8,
        paddingVertical: 8,
        color: Colors.common.black,
    },
    errorText: {
        fontSize: 12,
        color: Colors.error,
        marginTop: 5,
    },
});
