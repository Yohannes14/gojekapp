import React from 'react';
import { HOME, ONBOARDING } from './constants';
import { RootStackParamList } from '@/types/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home';
import OnBoardingScreen from '@/screens/Onboarding';
const RootStack = (): React.ReactElement => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />

            {/* <Stack.Screen name={HOME} component={HomeScreen} /> */}
        </Stack.Navigator>
    );
};
export default RootStack;