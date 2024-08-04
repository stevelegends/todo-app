import React, {useEffect, useRef} from 'react';

// modules
import {SafeAreaView} from 'react-native';

// styles
import {styles} from './styles';

// type
import type {AppStackScreenProps} from 'src/navigation/main-stack';

// components
import {AnimatedPopup, PressableText} from 'src/components/atoms';
import {useAnimatedPopup} from 'src/components/atoms/animated-popup/useAnimatedPopup';
import {TodoForm, TodoFormRef} from './todo-form';
import {TodoList} from './todo-list';
import {TodoEmptyView} from 'src/screens/home-screen/todo-empty-view';

// theme
import {appStyle} from 'src/theme';

// store
import {useAppDispatch} from 'src/store/store';
import {addTodoAction} from 'src/store/todo/saga';

interface Props extends AppStackScreenProps<'home-screen'> {}

export const HomeScreen = (_props: Props) => {
  const dispatch = useAppDispatch();

  const animatedPopup = useAnimatedPopup();

  const todoFormRef = useRef<TodoFormRef>(null);

  const handleAddOnPress = (title: string, description: string) => {
    animatedPopup.onClose();
    dispatch(addTodoAction({title, description}));
  };

  const handleCancelOnPress = () => {
    animatedPopup.onClose();
  };

  const handleOpenTodoForm = () => {
    animatedPopup.onOpen();
    todoFormRef.current?.focusTitle();
  };

  useEffect(() => {
    function onSetHeader() {
      _props.navigation.setOptions({
        headerRight: () => (
          <PressableText
            pressProps={{style: appStyle.buttonSizeS}}
            text="➕"
            onPress={handleOpenTodoForm}
          />
        ),
      });
    }
    onSetHeader();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TodoEmptyView onPress={handleOpenTodoForm} />
      <TodoList />
      <AnimatedPopup ref={animatedPopup.ref}>
        <TodoForm
          ref={todoFormRef}
          addOnPress={handleAddOnPress}
          cancelOnPress={handleCancelOnPress}
        />
      </AnimatedPopup>
    </SafeAreaView>
  );
};
