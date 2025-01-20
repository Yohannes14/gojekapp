import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/config/Colors';
import { Images } from '@/assets/images';
import { FONT } from '@/utils/fonts';
import ServiceItem from '@/components/ServiceItem';
import { services } from '@/utils/data/serviceData';

export default function HomeScreen() {

  return (
    <FlatList
      data={services}
      renderItem={({ item }) => <ServiceItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={4}
      columnWrapperStyle={styles.gridRow}
      ListHeaderComponent={
        <View style={styles.mainContainer}>
          {/* Header and Search */}
          <View style={styles.header}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={Colors.common.grey} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Find services, food, or places"
                placeholderTextColor={Colors.common.grey}
              />
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="person" size={18} color={Colors.background.primary} />
                <View style={styles.badge}>
                  <MaterialCommunityIcons name="message-text-clock-outline" size={12} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Promotional Banner */}
          <View style={styles.banner}>
            <Image
              source={Images.ad1}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </View>

          {/* Balance and Actions */}
          <View style={styles.balanceContainer}>
            <View style={styles.balanceInfo}>
              <Ionicons name="wallet" size={24} color={Colors.iconColor} />
              <Text style={styles.balanceText}>Rp0</Text>
            </View>

            <View style={styles.actionButtonsContainer}>
              <View style={styles.actionButtonContainer}>
                <View style={styles.actionButton}>
                  <Ionicons name="arrow-up" size={20} color={Colors.common.white} />
                </View>
                <Text style={styles.actionText}>Pay</Text>
              </View>
              <View style={styles.actionButtonContainer}>
                <View style={styles.actionButton}>
                  <Ionicons name="add" size={20} color={Colors.common.white} />
                </View>
                <Text style={styles.actionText}>Top Up</Text>
              </View>
              <View style={styles.actionButtonContainer}>
                <View style={styles.actionButton}>
                  <Ionicons name="ellipsis-horizontal" size={20} color={Colors.common.white} />
                  <View style={styles.moreBadge}>
                    <Text style={{ color: Colors.common.white }}>4</Text>
                  </View>
                </View>
                <Text style={styles.actionText}>More</Text>
              </View>
            </View>
          </View>
        </View>
      }
      ListFooterComponent={
        <View style={styles.secondaryBanner}>
          <Image
            source={Images.ad2}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    padding: 16,
    paddingBottom: 30,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    zIndex: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#f7f4fa",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: Colors.common.black,
    fontSize: 14,
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  iconButton: {
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: Colors.common.grey,
    marginHorizontal: 4,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    marginTop: -7,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 160,
  },
  balanceContainer: {
    marginHorizontal: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: -14,
    backgroundColor: Colors.background.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  balanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONT.SEMI_BOLD,
    color: Colors.common.black,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButtonContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  actionButton: {
    backgroundColor: Colors.iconColor,
    borderRadius: 16,
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  moreBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  secondaryBanner: {
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
});
