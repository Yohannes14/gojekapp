import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { Colors } from '@/config/Colors';

interface CustomHeaderProps {
    onBackPress: () => void;
    onHelpPress: () => void;
    onLanguagePress?: () => void;
    isLanguageVisible?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    onBackPress,
    onHelpPress,
    onLanguagePress,
    isLanguageVisible = false,
}) => {
    return (
        <View style={styles.headerContainer}>
            {/* Left: Back arrow */}
            <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                <AntDesign name="arrowleft" size={24} color={Colors.common.black} />
            </TouchableOpacity>

            {/* Right: Help and Language button */}
            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={onHelpPress} style={styles.iconButton}>
                    <Entypo name="help-with-circle" size={24} color={Colors.common.black} />
                </TouchableOpacity>

                {/* Conditionally render the language button */}
                {isLanguageVisible && (
                    <TouchableOpacity onPress={onLanguagePress} style={styles.languageButton}>
                        <Ionicons name="language" size={24} color={Colors.common.black} />
                        <Text style={styles.languageText}>English</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    iconButton: {
        paddingRight: 10,
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    languageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.common.black,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    languageText: {
        fontSize: 14,
        color: Colors.common.black,
        marginLeft: 2,
    },
});

export default CustomHeader;
