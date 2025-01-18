import {
    createNavigationContainerRef,
    StackActions,
    CommonActions,
} from '@react-navigation/native';
import { AuthStackParamList, RootStackParamList } from '@/types/Navigation';

// Create a type-safe navigation reference
export const navigationRef = createNavigationContainerRef<RootStackParamList>()

// Generic navigation function
export function navigate<RouteName extends keyof RootStackParamList>(
    name: RouteName,
    params?: RootStackParamList[RouteName]
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

// Push a new screen onto the stack
export function push<RouteName extends keyof AuthStackParamList>(
    name: RouteName,
    params?: AuthStackParamList[RouteName]
) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(name, params));
    }
}

// Go back to the previous screen
export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
}


