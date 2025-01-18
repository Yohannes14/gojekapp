import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './RootNavigation';
import AuthStack from './AuthStack';


const AppNavigator: React.FC = () => {
  const loggedInUser = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {loggedInUser ? <RootStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;