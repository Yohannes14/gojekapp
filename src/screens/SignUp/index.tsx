import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    Linking,
} from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { globalStyles } from '@/styles/GlobalStyles';
import CustomHeader from '@/components/CustomHeader';
import { goBack, navigate } from '@/navigation/RootNavigation';
import { FONT } from '@/utils/fonts';
import { Colors } from '@/config/Colors';
import CustomButton from '@/components/Button/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { VERIFICATION_METHOD } from '@/navigation/constants';
import LoadingModal from '@/components/LoadingModel';
import BottomSheet from '@/components/BottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import CleanInputField from '@/components/CLeanInputField';


export default function SignUpScreen() {
    const [countryCode, setCountryCode] = useState<CountryCode>('US');
    const [callingCode, setCallingCode] = useState('1');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const refRBSheet = useRef<RBSheet>(null);

    const onSelectCountry = (country: Country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    const handleContinue = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            refRBSheet.current?.open();
        }, 2000);
    };
    const clearPhoneNumber = () => {
        setPhoneNumber('');
    };


    return (
        <View style={globalStyles.container}>
            {/* Header */}
            <CustomHeader
                onBackPress={() => goBack()}
                onHelpPress={() => Alert.alert('Help', 'Need help? Contact support!')}
                onLanguagePress={() => Alert.alert('Language', 'Language selection coming soon!')}
                isLanguageVisible={true}
            />
            <Text style={styles.title}>Welcome to Gojek!</Text>
            <Text style={styles.subtitle}>
                Enter or create an account in a few easy steps.
            </Text>
            <Text style={styles.label}>
                Phone Number<Text style={{ color: Colors.error }}>*
                </Text>
            </Text>

            {/* Phone Number Input Row */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.countryPickerContainer}>
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter
                        withFlag
                        withCallingCode
                        withModal
                        onSelect={onSelectCountry}
                        theme={{
                            fontSize: 16,
                            flagSizeButton: 24,
                        }}
                        containerButtonStyle={styles.countryPickerButton}
                    />
                    <Text style={styles.callingCode}>+{callingCode}</Text>
                </TouchableOpacity>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="81X-xxx-xxx"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        accessibilityLabel="Phone number input"
                    />
                    {phoneNumber.length > 0 && (
                        <CleanInputField onPress={clearPhoneNumber} />
                    )}
                </View>
            </View>

            {/* Continue Button */}
            <View style={{ marginTop: 20 }}>
                <CustomButton
                    onPress={handleContinue}
                    style={{ marginVertical: 10, backgroundColor: phoneNumber ? Colors.button.primary : Colors.button.disabled }}
                    buttonStyle={{ marginVertical: 12, color: phoneNumber ? Colors.common.white : Colors.common.grey }}
                    title="Continue"
                    loading={false}
                    disabled={!phoneNumber}
                />

            </View>
            {/* Terms and Privacy */}
            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>

                    I agree to Gojek's
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL("https://www.google.com/")}
                    >
                        Terms of Service
                    </Text>{" "}
                    &{" "}
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL("https://www.google.com/")}
                    >
                        Privacy Policy.
                    </Text>.
                </Text>
            </View>

            <TouchableOpacity style={styles.phoneButton}>
                <Text style={styles.phoneButtonText}>Issue with number?</Text>
            </TouchableOpacity>

            {/* Modal for Loading */}
            <LoadingModal visible={isLoading} />
            {/* Bottom Sheet Modal */}
            <BottomSheet refRBSheet={refRBSheet} onAgree={() => navigate(VERIFICATION_METHOD)} />

            <View style={[styles.termsContainer, { flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }]}>
                <Text style={styles.termsText}>

                    from
                </Text>
                <Text
                    style={[styles.link, { fontFamily: FONT.SEMI_BOLD, fontSize: 24, paddingLeft: 6 }]}
                    onPress={() => Linking.openURL("https://www.google.com/")}
                >
                    goto

                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: FONT.BOLD,
        marginTop: 30,
        color: Colors.common.black,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.text.primary,
        marginTop: 10,
    },
    label: {
        fontSize: 14,
        color: Colors.common.black,
        marginTop: 20,
        fontFamily: FONT.SEMI_BOLD
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    countryPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    countryPickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callingCode: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 5,
    },
    inputWrapper: {
        flex: 1,
        position: 'relative',
    },
    phoneInput: {
        fontSize: 16,
        paddingVertical: 10,
        borderBottomWidth: 0.8,
        borderColor: Colors.common.black,
        paddingRight: 30,
    },
    removeIcon: {
        position: 'absolute',
        right: 0,
        top: 10,
    },

    continueText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.common.white,
    },
    termsContainer: {
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    termsText: {
        fontSize: 14,
        color: Colors.text.secondary,
    },
    link: {
        color: Colors.button.primary,
        fontWeight: "bold",
    },
    phoneButton: {
        alignSelf: 'flex-start',
        borderWidth: 0.5,
        borderColor: Colors.common.grey,
        borderRadius: 24,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 30,
    },
    phoneButtonText: {
        fontSize: 16,
        color: Colors.common.black,
        fontWeight: 'bold',
    }

});
