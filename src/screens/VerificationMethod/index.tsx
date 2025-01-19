import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Linking,

} from 'react-native';
import { globalStyles } from '@/styles/GlobalStyles';
import CustomHeader from '@/components/CustomHeader';
import { goBack } from '@/navigation/RootNavigation';
import { FONT } from '@/utils/fonts';
import { Colors } from '@/config/Colors';
import { Images } from '@/assets/images';
import VerificationOption from '@/components/VerificationOption';


const VerificationMethodScreen: React.FC = () => {
    return (
        <View style={globalStyles.container}>
            <CustomHeader
                onBackPress={goBack}
                onHelpPress={() => Alert.alert('Help', 'Need help? Contact support!')}
            />
            <Text style={styles.title}>Choose verification method</Text>
            <View style={styles.optionsWrapper}>
                <VerificationOption
                    icon={Images.sms}
                    label="OTP via SMS"
                    onPress={() => Alert.alert('Selected', 'OTP via SMS')}
                />
                <VerificationOption
                    icon={Images.whatsApp}
                    label="OTP via WhatsApp"
                    onPress={() => Alert.alert('Selected', 'OTP via WhatsApp')}
                />
            </View>
            <View style={styles.termsWrapper}>
                <Text style={styles.termsText}>from</Text>
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL("https://www.google.com/")}
                >
                    goto
                </Text>
            </View>
        </View>
    );
};

export default VerificationMethodScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: FONT.BOLD,
        marginTop: 20,
        color: Colors.common.black,
    },
    optionsWrapper: {
        marginTop: 20,
    },
    termsWrapper: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    termsText: {
        fontSize: 14,
        color: Colors.text.secondary,
    },
    link: {
        color: Colors.button.primary,
        fontFamily: FONT.SEMI_BOLD,
        fontSize: 24,
        paddingLeft: 6,
    },
});
