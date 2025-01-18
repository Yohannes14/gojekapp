import React, { ReactNode } from "react";
import { StyleSheet, Pressable, PressableProps, ViewStyle } from "react-native";

interface CustomPressableProps extends PressableProps {
  style?: ViewStyle;
  children: ReactNode;
}

const CustomPressable: React.FC<CustomPressableProps> = ({ style, children, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) =>
        StyleSheet.flatten([{ opacity: pressed ? 0.6 : 1 }, style])
      }
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;
