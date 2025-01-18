import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react'
import { FONT } from '@/utils/fonts';
import { OnboardingItemProps } from '@/types/Components';
import { Colors } from '@/config/Colors';


const { width } = Dimensions.get("window");

const OnboardingItem = ({ item }: OnboardingItemProps) => {
    return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    slide: {
        width: width - 40,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "90%",
        height: 250,
        marginTop: 20,
        borderRadius: 24,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: FONT.BOLD,
        marginTop: 20,
        color: Colors.common.black,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        color: Colors.text.primary,
        fontFamily: FONT.REGULAR
    }
});

export default OnboardingItem;