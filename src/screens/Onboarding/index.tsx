import { Images } from "@/assets/images";
import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Linking,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from "@/components/Button/CustomButton";
import { Colors } from "@/config/Colors";
import { FONT } from "@/utils/fonts";
import OnboardingItem from "@/components/OnBoardingItem";
import { onboardingData } from "@/utils/data/onboardingData";

const { width } = Dimensions.get("window");


export default function OnBoardingScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setCurrentIndex(index);
    };

   

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={Images.logo1} style={styles.logo} />
                <TouchableOpacity style={styles.languageButton}>
                    <Ionicons name="language" size={24} />
                    <Text style={styles.languageText}>English</Text>
                </TouchableOpacity>
            </View>

            {/* Onboarding Content */}
            <View style={styles.onboardingContent}>
                <FlatList
                    data={onboardingData}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    ref={flatListRef}
                />

                {/* Pagination */}
                <View style={styles.pagination}>
                    {onboardingData.map((_, index) => (
                        <View
                            key={index}
                            style={[styles.dot, index === currentIndex ? styles.dotActive : styles.dotInactive]}
                        />
                    ))}
                </View>

                {/* Buttons */}
                <CustomButton
                    onPress={() => { }}
                    style={{ marginVertical: 10, backgroundColor: Colors.button.primary }}
                    buttonStyle={{ marginVertical: 12, color: Colors.common.white }}
                    title="Log in"
                    loading={false}
                    disabled={false}
                />
                <CustomButton
                    onPress={() => { }}
                    style={{ marginVertical: 10, backgroundColor: Colors.button.secondary, borderWidth: 1, borderColor: Colors.button.primary }}
                    buttonStyle={{ marginVertical: 12, color: Colors.button.primary }}
                    title="I'm new, sign me up"
                    loading={false}
                    disabled={false}
                />

                {/* Terms and Privacy */}
                <View style={styles.termsContainer}>
                    <Text style={styles.termsText}>
                        By logging in or registering, you agree to our{" "}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL("https://example.com/terms")}
                        >
                            Terms of service
                        </Text>{" "}
                        and{" "}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL("https://example.com/privacy")}
                        >
                            Privacy policy
                        </Text>.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
    },
    languageButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#DDDDDD",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    languageText: {
        fontSize: 14,
        color: "#000000",
        marginLeft: 2,
    },
    onboardingContent: {
        flex: 1,
        justifyContent: "flex-end",
    },
   
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    dotActive: {
        backgroundColor: "#4CAF50",
    },
    dotInactive: {
        backgroundColor: "#DDDDDD",
    },
    termsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    termsText: {
        fontSize: 14,
        color: "#555555",
    },
    link: {
        color: "#4CAF50",
        fontWeight: "bold",
    },
});
