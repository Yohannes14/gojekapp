import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import CustomButton from '@/components/Button/CustomButton';
import { Images } from '@/assets/images';
import { Colors } from '@/config/Colors';
import { REGISTER } from '@/navigation/constants';
import { navigate } from '@/navigation/RootNavigation';
import { globalStyles } from '@/styles/GlobalStyles';
import { FONT } from '@/utils/fonts';

export default function OpenLocation() {
    const [isLoading, setIsLoading] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        setButtonClicked(true);
        setTimeout(() => navigate(REGISTER), 3000);
    };

    return (
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <Image source={Images.img1} style={styles.image} resizeMode="contain" />
                <Text style={styles.title}>Lastly, turn your location on</Text>
            </View>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={Colors.button.primary} />
                </View>
            ) : (
                <View style={styles.footer}>
                    {buttonClicked ? (
                        <Text style={styles.redirectText}>Landing you to Gojek Home...🚀</Text>
                    ) : (
                        <>
                            <Text style={styles.errorText}>Can't turn on location services</Text>
                            <CustomButton
                                onPress={handleButtonClick}
                                style={styles.buttonContainer}
                                buttonStyle={styles.buttonText}
                                title="Select location manually"
                                loading={false}
                                disabled={false}
                            />
                        </>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 24,
        marginTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: FONT.BOLD,
        marginTop: 20,
        color: Colors.common.black,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    redirectText: {
        fontSize: 18,
        color: Colors.common.grey,
    },
    errorText: {
        fontSize: 16,
        color: Colors.common.grey,
    },
    buttonContainer: {
        marginVertical: 10,
        backgroundColor: Colors.common.white,
        borderWidth: 1,
        borderColor: Colors.button.primary,
    },
    buttonText: {
        marginVertical: 10,
        color: Colors.button.primary,
    },
});
