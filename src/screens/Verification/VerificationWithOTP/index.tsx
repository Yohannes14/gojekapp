import React, { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { globalStyles } from '@/styles/GlobalStyles';
import CustomHeader from '@/components/CustomHeader';
import { goBack, navigate } from '@/navigation/RootNavigation';
import { FONT } from '@/utils/fonts';
import { Colors } from '@/config/Colors';
import { NAME_EMAIL } from '@/navigation/constants';
import LoadingModal from '@/components/LoadingModel';


export default function VerificationWithOtpScreen() {
    const [otp, setOtp] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(120); // 2-minute timer
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility

    // Handle OTP input change
    const handleOtpChange = (text: string) => {
        if (text.length <= 4) {
            setOtp(text);

            if (text.length === 4) {
                setIsLoading(true);
                setModalVisible(true); // Show the loading modal
                setTimeout(() => {
                    setIsLoading(false);
                    setModalVisible(false); // Hide the loading modal
                    navigate(NAME_EMAIL); 
                }, 2000); 
            }
        }
    };

    // Countdown timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Format time
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <View style={globalStyles.container}>
            <CustomHeader
                onBackPress={goBack}
                onHelpPress={() => Alert.alert('Help', 'Need help? Contact support!')}
            />
            <Text style={styles.title}>Enter OTP sent via SMS</Text>
            <Text style={styles.subtitle}>We've sent OTP to +251935416737</Text>
            <Text style={styles.label}>
                OTP<Text style={{ color: Colors.error }}>*</Text>
            </Text>

            <View style={styles.otpContainer}>
                <TextInput
                    style={styles.otpInput}
                    value={otp}
                    onChangeText={handleOtpChange}
                    keyboardType="numeric"
                    maxLength={4}
                    //secureTextEntry
                    placeholder="••••"
                    placeholderTextColor={Colors.text.secondary}
                />
                <View style={styles.timerContainer}>
                    {isLoading && (
                        <ActivityIndicator size="small" color={Colors.button.primary} />
                    )}
                    <Text style={styles.timerText}>{formatTime(timer)}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.anotherMothed}
                onPress={() => goBack()}
            >
                <Text style={styles.phoneButtonText}>Try another method</Text>
            </TouchableOpacity>

            {/* Show Loading Modal */}
            <LoadingModal visible={modalVisible} />
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
    subtitle: {
        fontSize: 14,
        marginTop: 10,
        color: Colors.text.secondary,
    },
    label: {
        fontSize: 14,
        color: Colors.common.black,
        marginTop: 20,
        fontFamily: FONT.SEMI_BOLD
    },
    otpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        borderBottomWidth: 0.8,
        borderColor: Colors.common.black,
        paddingBottom: 5,
    },
    otpInput: {
        flex: 1,
        fontSize: 20,
        color: Colors.common.black,
        fontFamily: FONT.REGULAR,
        letterSpacing: 12,
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    timerText: {
        fontSize: 16,
        color: Colors.common.black,
    },
    anotherMothed: {
        alignSelf: 'flex-start',
        borderWidth: 0.5,
        borderColor: Colors.common.grey,
        borderRadius: 24,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 20,
    },
    phoneButtonText: {
        fontSize: 16,
        color: Colors.common.black,
        fontWeight: 'bold',
    },
});
