import React, {forwardRef, useImperativeHandle} from 'react';

// modules
import Animated, {
  AnimatedProps,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ViewProps, ViewStyle} from 'react-native';

// styles
import {colors, size, spacing} from 'src/theme';

export interface AnimatedPopupRef {
  open: () => void;
  close: () => void;
}

type Props = {} & AnimatedProps<ViewProps>;

export const AnimatedPopup = forwardRef<AnimatedPopupRef, Props>(
  function AnimatedPopup(_props, _ref) {
    const yValue = useSharedValue<0 | 1>(0);

    const containerStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              yValue.value,
              [0, 1],
              [-size.screenHeight, 0],
            ),
          },
        ],
      };
    }, []);

    const onOpen = () => {
      yValue.value = withTiming(1);
    };

    const onClose = () => {
      yValue.value = withTiming(0);
    };

    useImperativeHandle(
      _ref,
      () => {
        return {
          open: onOpen,
          close: onClose,
        };
      },
      [],
    );

    return <Animated.View style={[$container, containerStyle]} {..._props} />;
  },
);

const $container: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  padding: spacing.md,
  position: 'absolute',
  width: '100%',
};
