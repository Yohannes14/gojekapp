import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { Colors } from '@/config/Colors';
import { FONT } from '@/utils/fonts';
import { ServiceItemProps } from '@/types/Components';

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const showBadge = item.hasBadge; 

  return (
    <TouchableOpacity style={styles.serviceContainer}>
      <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
        {showBadge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>-30k</Text>
          </View>
        )}
        <Image source={item.icon} style={styles.image} />
      </View>
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ServiceItem;

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
  badge: {
    position: 'absolute',
    top: -5,
    left: -1,
    backgroundColor: Colors.common.black, 
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    color: Colors.common.white,
    fontSize: 10,
    fontFamily: FONT.BOLD,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.common.black,
    fontFamily: FONT.BOLD,
    textAlign: 'center',
  },
});
