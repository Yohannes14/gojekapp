import React, { useContext } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import CustomPressable from "../CustomPressable";
import { FONT } from "@/utils/fonts";
import { Colors } from "@/config/Colors";
import { CustomButtonProps } from "@/types/Components";




const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    style,
    buttonStyle,
    loading,
    disabled,
}) => {

    return (
        <CustomPressable
            style={[
                styles.container,
                { backgroundColor: disabled ? Colors.button.disabled : Colors.button.primary },
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {/* {loading && (
        <ActivityIndicator
          color={theme.white}
          style={{
            marginRight: 8,
          }}
        />
      )} */}

            <Text style={[styles.button, buttonStyle]}>{title}</Text>
        </CustomPressable>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        width: "100%",
        borderRadius: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 16,
        marginVertical: 10,
        fontFamily: FONT.SEMI_BOLD,
    },
});

export default CustomButton;
