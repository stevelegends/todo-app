import React, {memo, useCallback} from 'react';

// modules
import {FlatList, ListRenderItem} from 'react-native';

// type
import type {Todo} from 'src/store/todo/type';

// components
import {SeparatorView} from 'src/components/atoms';
import {TodoItem} from './todo-item';

const todoList = [
  {
    _id: '1',
    title: 'test',
    description: 'test 1',
    isComplete: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'test',
    description: 'test 2',
    isComplete: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

type Props = {};

export const TodoList = memo(({}: Props) => {
  const renderItem: ListRenderItem<Todo> = useCallback(({item}) => {
    return <TodoItem item={item} />;
  }, []);

  const ItemSeparatorComponent = useCallback(() => <SeparatorView />, []);

  return (
    <FlatList
      data={todoList}
      keyExtractor={item => item._id}
      renderItem={renderItem}
      initialNumToRender={10}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={ItemSeparatorComponent}
    />
  );
});
