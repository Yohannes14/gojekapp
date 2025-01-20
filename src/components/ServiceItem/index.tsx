import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { Colors } from '@/config/Colors'
import { FONT } from '@/utils/fonts'
import { ServiceItemProps } from '@/types/Components'

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
    return (
        <TouchableOpacity style={styles.serviceContainer}>
            <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
                <Image source={item.icon} style={styles.image} />
            </View>
            <Text style={styles.serviceText}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default ServiceItem

const styles = StyleSheet.create({
    serviceContainer: {
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
        flex: 1,
    },
    image: {
        position: 'absolute',
        bottom: -12,
        width: '100%',
        height: 60,
        resizeMode: 'contain',
    },
    iconWrapper: {
        width: 75,
        height: 75,
        borderRadius: 12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        overflow: 'visible',
    },
    serviceText: {
        marginTop: 10,
        fontSize: 16,
        color: Colors.common.black,
        fontFamily: FONT.BOLD,
        textAlign: 'center',
    },
})