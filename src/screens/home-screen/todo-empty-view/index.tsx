import React, {Fragment} from 'react';

// components
import {EmptyListView} from 'src/components/organisms';

// store
import {useAppSelector} from 'src/store/store';

type Props = {
  onPress: () => void;
};

export const TodoEmptyView = ({onPress = () => undefined}: Props) => {
  const isNotEmpty = useAppSelector(
    state => state.todoReducer.todo?.length > 0,
  );
  if (isNotEmpty) {
    return <Fragment />;
  }
  return <EmptyListView onPress={onPress} label="Add your first task!" />;
};
