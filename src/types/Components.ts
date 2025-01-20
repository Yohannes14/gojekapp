import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

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
interface LoadingModalProps {
    visible: boolean;
}
interface BottomSheetProps {
    refRBSheet: React.RefObject<RBSheet>;
    onAgree: () => void;
}
interface VerificationOptionProps {
    icon: ImageSourcePropType;
    label: string;
    onPress: () => void;
}

interface InputFieldProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    isValid: boolean;
    keyboardType?: 'default' | 'email-address' | 'phone-pad';
    secureTextEntry?: boolean;
    errorMessage?: string;
};

interface ServiceItemProps {
    item: {
        id: string;
        name: string;
        icon: ImageSourcePropType;
        color: string;
    };
}


export type
{
    OnboardingItemProps,
    CustomButtonProps,
    LoadingModalProps,
    BottomSheetProps,
    VerificationOptionProps,
    InputFieldProps,
    ServiceItemProps
}