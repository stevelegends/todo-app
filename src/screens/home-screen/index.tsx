import React, {useCallback, useEffect} from 'react';

// modules
import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';

// styles
import {styles} from './styles';

// type
import type {AppStackScreenProps} from 'src/navigation/main-stack';
import type {Todo} from 'src/store/todo/type';

// components
import {PressableText, SeparatorView} from 'src/components/atoms';
import {TodoItem} from './todo-item';

interface Props extends AppStackScreenProps<'home-screen'> {}

export const HomeScreen = (_props: Props) => {
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

  const renderItem: ListRenderItem<Todo> = useCallback(({item}) => {
    return <TodoItem item={item} />;
  }, []);

  const ItemSeparatorComponent = useCallback(() => <SeparatorView />, []);

  useEffect(() => {
    function onSetHeader() {
      _props.navigation.setOptions({
        headerRight: () => <PressableText text="➕" />,
      });
    }
    onSetHeader();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
};
