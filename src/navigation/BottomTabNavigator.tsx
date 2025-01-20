import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/Home/HomeScreen';
import ChatScreen from '@/screens/Chat';
import ActvityScreen from '@/screens/Activity';
import PromoScreen from '@/screens/Promo';
import { Foundation, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { AuthStackParamList } from '@/types/Navigation';
import { ACTIVITY, CHAT, HOME, PROMO } from './constants';
import { Colors } from '@/config/Colors';
import TabOptions from '@/components/TabOptions';

const Tab = createBottomTabNavigator<AuthStackParamList>();


const BtmTabs = (): React.ReactElement => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { borderWidth: 0, backgroundColor: Colors.background.secondary },
                tabBarActiveTintColor: Colors.button.primary,
                tabBarInactiveTintColor: Colors.common.black,
            }}
        >
            {/* Home Tab */}
            <Tab.Screen
                name={HOME}
                component={HomeScreen}
                options={TabOptions('Home', Foundation, 'home')}
            />

            {/* Promo Tab */}
            <Tab.Screen
                name={PROMO}
                component={PromoScreen}
                options={TabOptions('Promo', FontAwesome, 'gift')}
            />

            {/* Activity Tab */}
            <Tab.Screen
                name={ACTIVITY}
                component={ActvityScreen}
                options={TabOptions('Activity', MaterialIcons, 'history')}
            />

            {/* Chat Tab */}
            <Tab.Screen
                name={CHAT}
                component={ChatScreen}
                options={TabOptions('Chat', MaterialIcons, 'chat')}
            />
        </Tab.Navigator>
    );
};

export default BtmTabs;
