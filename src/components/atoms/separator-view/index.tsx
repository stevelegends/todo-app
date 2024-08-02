import React from 'react';

// modules
import { View, ViewStyle } from 'react-native';

// theme
import {colors} from 'src/theme/colors';

type props = {
  color?: string;
  styles?: ViewStyle;
};

export const SeparatorView = ({color = colors.separator, styles}: props) => {
  return <View style={[{height: 1, backgroundColor: color}, styles]} />;
};
