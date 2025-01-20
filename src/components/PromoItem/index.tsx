import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/config/Colors';
import { FONT } from '@/utils/fonts';
import { PromoItemProps } from '@/types/Components';

const PromoItem: React.FC<PromoItemProps> = ({ item }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardBadge}>
                {item.badge}
            </Text>
            <Image style={styles.cardImage} source={item.image} />
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
    )
};
export default PromoItem;

const styles = StyleSheet.create({

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
        alignSelf: 'flex-start',
        resizeMode: 'contain'
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
    }
});
