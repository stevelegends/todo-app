import {StyleSheet} from 'react-native';

// theme
import {spacing} from 'src/theme/spacing';

const appStyle = StyleSheet.create({
  buttonSize: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  flex1: {
    flex: 1,
  },
  listFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spaceSM: {
    height: spacing.sm,
    width: spacing.sm,
  },
  'width100%': {
    width: '100%',
  },
});

export default appStyle;
