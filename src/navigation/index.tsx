import * as React from 'react';

// modules
import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';

// stack
import MainStack, {AppStackParamList} from 'src/navigation/main-stack';

// theme
import appStyle from 'src/theme/app-style';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

const Navigation = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={appStyle.flex1}>
        <NavigationContainer
          ref={navigationRef}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <MainStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Navigation;
