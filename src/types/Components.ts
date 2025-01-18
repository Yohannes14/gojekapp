import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

interface OnboardingItemProps {
    item: {
        image: ImageSourcePropType
        title: string;
        description: string;
    };
}

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    buttonStyle?: TextStyle;
    loading?: boolean;
    disabled?: boolean;
}

export type { OnboardingItemProps, CustomButtonProps };