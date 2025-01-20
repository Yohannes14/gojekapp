import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';
import { Colors } from '@/config/Colors';
import CustomButton from '@/components/Button/CustomButton';
import NotificationModal from '@/components/NotificationModal';
import { Images } from '@/assets/images';
import { navigate } from '@/navigation/RootNavigation';
import { BTM_TABS } from '@/navigation/constants';
import PromoItem from '@/components/PromoItem';
import { promoData } from '@/utils/data/PromoData';


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
                    renderItem={({item})=><PromoItem item={item}/>}
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

