import * as React from 'react';

// modules
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// screens
import * as Screen from 'src/screens';

export type AppStackParamList = {
  'home-screen': undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="home-screen">
      <Stack.Screen
        options={{title: 'Home'}}
        name="home-screen"
        component={Screen.HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
