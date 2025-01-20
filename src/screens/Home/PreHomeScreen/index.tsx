import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Alert,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/config/Colors';
import CustomButton from '@/components/Button/CustomButton';
import { FONT } from '@/utils/fonts';
import NotificationModal from '@/components/NotificationModal';
import { Images } from '@/assets/images';
import { navigate } from '@/navigation/RootNavigation';
import { BTM_TABS } from '@/navigation/constants';


export default function PreHomeScreen() {

    const [notificationModalVisible, setNotificationModalVisible] = useState(true);
    const [trackModalVisible, setTrackModalVisible] = useState(false);

    const handleNotificationPermission = (allow: boolean) => {
        setNotificationModalVisible(false);
        setTrackModalVisible(true);
    };
    const handleTrackPermission = (allow: boolean) => {
        setTrackModalVisible(false);
    };


    const promoData = [
        {
            id: '1',
            badge: 'Cashback up to 50%',
            text: 'Get food',
            color: Colors.error,
            image: 'https://via.placeholder.com/100',
        },
        {
            id: '2',
            badge: 'Up to 85% off',
            text: 'Book a ride',
            color: Colors.button.primary,
            image: 'https://via.placeholder.com/100',
        },
        {
            id: '3',
            badge: 'Starts at $5',
            text: 'Book a car',
            color: Colors.button.primary,
            image: 'https://via.placeholder.com/100',
        },
        {
            id: '4',
            badge: 'FREE delivery on food',
            text: 'Budget eats',
            color: Colors.error,
            image: 'https://via.placeholder.com/100',
        },
    ];

    const renderPromoCard = ({ item }: any) => (
        <View style={styles.card}>
            <Text style={styles.cardBadge}>
                {item.badge}
            </Text>
            <Image style={styles.cardImage} source={Images.payment} />
            <View style={styles.cardFooter}>
                <Text style={styles.cardText}>{item.text}</Text>
                <View style={[styles.cardIconContainer, { backgroundColor: item.color }]}>
                    <FontAwesome
                        name="arrow-right"
                        size={16}
                        color={Colors.common.white}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Image source={Images.bg1} style={styles.headerImage} />
            </View>

            {/* Curved Content Section */}
            <View style={styles.curvedSection}>
                <View style={{ marginBottom: 24 }}>
                    <Text style={styles.title}>New here? We've got a treat for you!</Text>
                    <Text style={styles.subtitle}>Enjoy your first-time discount</Text>
                </View>

                {/* Promo Cards */}
                <FlatList
                    data={promoData}
                    renderItem={renderPromoCard}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.cardContainer}
                    numColumns={2} // Display in 2 columns
                />
            </View>

            {/* Skip Button */}
            <View style={styles.skipButtonContainer}>
                <CustomButton
                    onPress={() => navigate(BTM_TABS)}
                    style={styles.customButton}
                    buttonStyle={styles.customButtonText}
                    title="Skip the treat"
                    loading={false}
                    disabled={false}
                />
            </View>

            {/* Notification Modal */}
            <NotificationModal
                isTrack={false}
                visible={notificationModalVisible}
                onAllow={() => handleNotificationPermission(true)}
                title='"Gojek" Would Like to Send You Notifications'
                disc='Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.'
            />

            {/* Confirmation Modal */}
            <NotificationModal
                isTrack={true}
                onAllow={() => handleTrackPermission(false)}
                title='Allow "Gojek" to track your activity across other companies apps and websites?'
                disc='Your data will be used to personalise content and improve service quality'
                visible={trackModalVisible}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },
    headerContainer: {
        height: 220,
    },
    headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    curvedSection: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
        borderTopLeftRadius: 54,
        borderTopRightRadius: 54,
        marginTop: -40,
        paddingVertical: 40,
    },
    title: {
        fontSize: 16,
        color: Colors.common.grey,
        marginTop: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.common.black,
        textAlign: 'center',
    },
    cardContainer: {
        padding: 16,
    },
    card: {
        backgroundColor: Colors.common.white,
        borderRadius: 10,
        margin: 8,
        flex: 1,
        paddingVertical: 14,
        shadowColor: Colors.common.grey,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardBadge: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.common.white,
        backgroundColor: Colors.common.black,
        padding: 4,
        borderRadius: 5,
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    cardImage: {
       width: '80%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf:'flex-start'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 14,
        fontFamily: FONT.SEMI_BOLD,
        color: Colors.common.black,
        paddingLeft: 4,
    },
    cardIconContainer: {
        padding: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
    },
    skipButtonContainer: {
        marginHorizontal: 24,
        marginVertical: 10,
        marginBottom: 30,
    },
    customButton: {
        backgroundColor: Colors.button.disabled,
        borderWidth: 1,
        borderColor: Colors.button.primary,
    },
    customButtonText: {
        color: Colors.button.primary,
    },
});

