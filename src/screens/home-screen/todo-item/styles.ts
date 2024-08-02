import {StyleSheet} from 'react-native';

// theme
import {spacing} from 'src/theme/spacing';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
  labelText: {
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonChild: {
    fontSize: 20,
  },
});
