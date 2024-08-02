import React from 'react';

// modules
import {Pressable, PressableProps, Text, TextProps} from 'react-native';

type props = {
  text: string;
  onPress?: () => void;
  pressProps?: PressableProps;
  textProps?: TextProps;
};

export const PressableText = ({
  text = '',
  onPress = () => undefined,
  pressProps,
  textProps,
}: props) => {
  return (
    <Pressable {...pressProps} onPress={onPress}>
      <Text {...textProps}>{text}</Text>
    </Pressable>
  );
};
