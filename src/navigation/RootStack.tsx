// RootStack.tsx or Navigator.tsx
import React from 'react';
import { ONBOARDING, REGISTER } from './constants';  // Import the constants
import { RootStackParamList } from '@/types/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home';
import OnBoardingScreen from '@/screens/Onboarding';
import SignUpScreen from '@/screens/SignUp';

const RootStack = (): React.ReactElement => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />
            <Stack.Screen name={REGISTER} component={SignUpScreen} />
            {/* Add other screens here if needed */}
        </Stack.Navigator>
    );
};

export default RootStack;
