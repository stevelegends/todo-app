import React, {useEffect} from 'react';

// modules
import {SafeAreaView} from 'react-native';

// styles
import {styles} from './styles';

// type
import type {AppStackScreenProps} from 'src/navigation/main-stack';

// components
import {AnimatedPopup, PressableText} from 'src/components/atoms';
import {useAnimatedPopup} from 'src/components/atoms/animated-popup/useAnimatedPopup';
import {TodoForm} from './todo-form';
import {TodoList} from './todo-list';

// theme
import {appStyle} from 'src/theme';

// store
import {useAppDispatch} from 'src/store/store';
import {addTodoAction} from 'src/store/todo/saga';

interface Props extends AppStackScreenProps<'home-screen'> {}

export const HomeScreen = (_props: Props) => {
  const dispatch = useAppDispatch();

  const animatedPopup = useAnimatedPopup();

  const handleAddOnPress = (title: string, description: string) => {
    animatedPopup.onClose();
    dispatch(addTodoAction({title, description}));
  };

  const handleCancelOnPress = () => {
    animatedPopup.onClose();
  };

  useEffect(() => {
    function onSetHeader() {
      _props.navigation.setOptions({
        headerRight: () => (
          <PressableText
            pressProps={{style: appStyle.buttonSizeS}}
            text="➕"
            onPress={animatedPopup.onOpen}
          />
        ),
      });
    }
    onSetHeader();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
      <AnimatedPopup ref={animatedPopup.ref}>
        <TodoForm
          addOnPress={handleAddOnPress}
          cancelOnPress={handleCancelOnPress}
        />
      </AnimatedPopup>
    </SafeAreaView>
  );
};
