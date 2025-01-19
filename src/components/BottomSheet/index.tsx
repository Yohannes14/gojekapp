import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetProps } from "@/types/Components";
import { Images } from "@/assets/images";
import CustomButton from "../Button/CustomButton";
import { Colors } from "@/config/Colors";

const BottomSheet: React.FC<BottomSheetProps> = ({ refRBSheet, onAgree }) => {
    return (
        <RBSheet
            ref={refRBSheet}
            height={450}
            useNativeDriver={false}
            openDuration={450}
            customStyles={{
                container: styles.container
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
            customAvoidingViewProps={{
                enabled: false,
            }}
        >
            {/* Close Icon */}
            <TouchableOpacity
                style={styles.closeIconContainer}
                onPress={() => refRBSheet.current?.close()}
            >
                <Ionicons name="close-circle" size={28} color={Colors.common.grey} />
            </TouchableOpacity>

            {/* Sheet Content */}
            <View style={styles.content}>
                <Image source={Images.sheetImg} style={styles.image} />
            </View>
            <Text style={styles.sheetText}>
                To continue, please agree to our terms and policies first
            </Text>
            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>

                    Read
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

            <CustomButton
                onPress={onAgree}
                style={{ marginVertical: 4, backgroundColor: Colors.button.primary }}
                buttonStyle={{ marginVertical: 12, color: Colors.common.white }}
                title="I agree"
                loading={false}
                disabled={false}
            />
        </RBSheet>

    );
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: Colors.common.white,
        position: 'relative',
    },
    closeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
    sheetText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
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
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        height: 200,
        width: '90%',
        borderRadius: 40
    },
    text: {
        fontSize: 16,
        marginVertical: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

});

export default BottomSheet;
