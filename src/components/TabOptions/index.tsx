import React from 'react';
import { Text } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'; // Import the type
import { Colors } from '@/config/Colors';

const TabOptions = (
    label: string,
    IconComponent: React.ComponentType<any>,
    iconName: string
): BottomTabNavigationOptions => ({
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <IconComponent name={iconName} size={size} color={color} />
    ),
    tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Text
            style={{
                color: Colors.common.black,
                fontSize: 12,
            }}
        >
            {label}
        </Text>
    ),
});

export default TabOptions;
