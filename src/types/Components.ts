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



export type { OnboardingItemProps, CustomButtonProps, LoadingModalProps, BottomSheetProps, VerificationOptionProps };