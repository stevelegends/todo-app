import React, {useCallback} from 'react';

// modules
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

// screens
import * as Screen from 'src/screens';

export type AppStackParamList = {
  'home-screen': undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

function MainStack() {
  useFocusEffect(
    useCallback(() => {
      SplashScreen.hide();
    }, []),
  );

  return (
    <Stack.Navigator initialRouteName="home-screen">
      <Stack.Screen
        options={{title: 'TODO'}}
        name="home-screen"
        component={Screen.HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
