import * as React from 'react';

// modules
import {View, Text} from 'react-native';

// styles
import {styles} from './styles';

// type
import type {AppStackScreenProps} from 'src/navigation/main-stack';

interface Props extends AppStackScreenProps<'home-screen'> {}

export const HomeScreen = (_props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
