// HomeTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/Home/HomeScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthStackParamList } from '@/types/Navigation';
import ChatScreen from '@/screens/Chat';
import ActvityScreen from '@/screens/Activity';
import PromoScreen from '@/screens/Promo';
import { ACTIVITY, CHAT, HOME, PROMO } from './constants';
import { Colors } from '@/config/Colors';

const Tab = createBottomTabNavigator<AuthStackParamList>();

const HomeTabs = (): React.ReactElement => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { borderWidth:0},
                tabBarActiveTintColor: Colors.button.primary,
                tabBarInactiveTintColor: Colors.common.black,
            }}
        >
            {/* Home Tab */}
            <Tab.Screen
                name={HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            {/* Promo Tab */}
            <Tab.Screen
                name={PROMO}
                component={PromoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="gift" size={size} color={color} />
                    ),
                    title: 'Promo',
                }}
            />

            {/* Activity Tab */}
            <Tab.Screen
                name={ACTIVITY}
                component={ActvityScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="history" size={size} color={color} />
                    ),
                    title: 'Activity',
                }}
            />

            {/* Chat Tab */}
            <Tab.Screen
                name={CHAT}
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble-outline" size={size} color={color} />
                    ),
                    title: 'Chat',
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabs;
