// RootStack.tsx or Navigator.tsx
import React from 'react';
import { HOME_TABS, LOCATION, NAME_EMAIL, ONBOARDING, PRE_HOME, REGISTER, VERIFICATION_METHOD, VERIFICATION_WITH_OTP } from './constants';  // Import the constants
import { RootStackParamList } from '@/types/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home/HomeScreen';
import OnBoardingScreen from '@/screens/Onboarding';
import SignUpScreen from '@/screens/SignUp';
import VerificationMethodScreen from '@/screens/Verification/VerificationMethod';
import VerficationWithOptScreen from '@/screens/Verification/VerificationWithOTP';
import NameAndEMailFormScreen from '@/screens/NameAndEmailIForm';
import OpenLocation from '@/screens/Location';
import PreHomeScreen from '@/screens/Home/PreHomeScreen';
import HomeTabs from './BottomTabNavigator';

const RootStack = (): React.ReactElement => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />
            <Stack.Screen name={REGISTER} component={SignUpScreen} />
            <Stack.Screen name={VERIFICATION_METHOD} component={VerificationMethodScreen} />
            <Stack.Screen name={VERIFICATION_WITH_OTP} component={VerficationWithOptScreen} />
            <Stack.Screen name={NAME_EMAIL} component={NameAndEMailFormScreen} />
            <Stack.Screen name={LOCATION} component={OpenLocation} /> */}
            <Stack.Screen name={PRE_HOME} component={PreHomeScreen}/>
            <Stack.Screen name={HOME_TABS} component={HomeTabs}/>
        </Stack.Navigator>
    );
};

export default RootStack;
