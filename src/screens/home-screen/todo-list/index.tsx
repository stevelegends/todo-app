import React, {memo, useCallback, useEffect, useRef} from 'react';

// modules
import {ListRenderItem} from 'react-native';
import Animated, {
  LinearTransition,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';

// type
import type {Todo} from 'src/store/todo/type';

// components
import {SeparatorView} from 'src/components/atoms';
import {TodoItem} from './todo-item';

// store
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {deleteTodoAction, updateCompleteTodoAction} from 'src/store/todo/saga';

type Props = {};

export const TodoList = memo(({}: Props) => {
  const dispatch = useAppDispatch();

  const todoList = useAppSelector(state => state.todoReducer.todo);

  const isInit = useRef<boolean>(true);

  const handleUpdateOnPress = useCallback(_id => {
    dispatch(updateCompleteTodoAction({_id}));
  }, []) as (_id: string) => void;

  const handleDeleteOnPress = useCallback(_id => {
    dispatch(deleteTodoAction({_id}));
  }, []) as (id: string) => void;

  const renderItem: ListRenderItem<Todo> = useCallback(({item, index}) => {
    return (
      <Animated.View
        entering={
          isInit.current ? SlideInRight.delay(index * 50) : SlideInRight
        }
        exiting={SlideOutRight}
        layout={LinearTransition.springify()}>
        <TodoItem
          item={item}
          deleteOnPress={handleDeleteOnPress}
          updateOnPress={handleUpdateOnPress}
        />
      </Animated.View>
    );
  }, []);

  const ItemSeparatorComponent = useCallback(() => <SeparatorView />, []);

  useEffect(() => {
    isInit.current = false;
  }, []);

  return (
    <Animated.FlatList
      data={todoList}
      keyExtractor={item => item._id}
      renderItem={renderItem}
      initialNumToRender={10}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={ItemSeparatorComponent}
    />
  );
});
