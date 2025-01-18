import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.languageButton}>English</Text>
                </TouchableOpacity>
            </View>

            {/* Title Section */}
            <Text style={styles.title}>Welcome to Gojek!</Text>
            <Text style={styles.subtitle}>
                Enter or create an account in a few easy steps.
            </Text>

            {/* Phone Number Input */}
            <View style={styles.phoneInputContainer}>
                <View style={styles.countryCodeContainer}>
                    <Image
                        source={{ uri: 'https://flagcdn.com/sg.svg' }} // Placeholder flag
                        style={styles.flag}
                    />
                    <Text style={styles.countryCode}>+65</Text>
                </View>
                <TextInput
                    style={styles.phoneInput}
                    placeholder="81x-xxx-xxx"
                    keyboardType="phone-pad"
                />
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>

            {/* Terms and Conditions */}
            <Text style={styles.termsText}>
                I agree to Gojek's{' '}
                <Text style={styles.linkText}>Terms of Service</Text> &{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>

            {/* Issue with Number */}
            <TouchableOpacity style={styles.issueButton}>
                <Text style={styles.issueText}>Issue with number?</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>from</Text>
                <Text style={styles.footerLogo}>goto</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backArrow: {
        fontSize: 20,
    },
    languageButton: {
        fontSize: 14,
        color: '#007AFF',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 30,
    },
    subtitle: {
        fontSize: 16,
        color: '#6D6D6D',
        marginTop: 10,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        padding: 10,
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    flag: {
        width: 24,
        height: 16,
        marginRight: 5,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: '500',
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
    },
    continueButton: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    continueText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    termsText: {
        fontSize: 12,
        color: '#6D6D6D',
        textAlign: 'center',
        marginTop: 20,
    },
    linkText: {
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
    issueButton: {
        alignSelf: 'center',
        marginTop: 10,
    },
    issueText: {
        fontSize: 14,
        color: '#007AFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#6D6D6D',
    },
    footerLogo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#34A853',
        marginLeft: 5,
    },
});
