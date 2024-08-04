import React from 'react';

// modules
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';

// theme
import {colors, size} from 'src/theme';

type Props = {
  label?: string;
  onPress?: () => void;
};

export const EmptyListView = ({label, onPress = () => undefined}: Props) => {
  return (
    <Pressable onPress={onPress} style={$emptyView}>
      <Text style={$labelText}>{label}</Text>
    </Pressable>
  );
};

const $emptyView: ViewStyle = {
  width: size.windowWidth,
  height: size.windowHeight,
  justifyContent: 'center',
  alignItems: 'center',
};

const $labelText: TextStyle = {
  fontSize: 18,
  textDecorationLine: 'underline',
  color: colors.palette.secondary500,
};
