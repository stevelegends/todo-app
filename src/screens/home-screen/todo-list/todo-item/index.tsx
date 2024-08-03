import React from 'react';

// model
import {Text, TextStyle, View} from 'react-native';

// styles
import {styles} from './styles';

// theme
import {appStyle} from 'src/theme';

// type
import type {Todo} from 'src/store/todo/type';

// components
import {PressableText} from 'src/components/atoms';

type Props = {
  item: Todo;
  deleteOnPress?: (_id: string) => void;
  updateOnPress?: (_id: string) => void;
};

export const TodoItem = ({
  item,
  updateOnPress = () => undefined,
  deleteOnPress = () => undefined,
}: Props) => {
  const labelStyle: TextStyle = {
    textDecorationLine: item.isComplete ? 'line-through' : 'none',
  };
  const handleUpdateOnPress = () => {
    updateOnPress(item._id);
  };
  const handleDeleteOnPress = () => {
    deleteOnPress(item._id);
  };
  return (
    <View style={styles.container}>
      <PressableText
        onPress={handleUpdateOnPress}
        text={item.isComplete ? '✅' : '☑️'}
        pressProps={{
          style: styles.button,
        }}
        textProps={{style: styles.buttonChild}}
      />
      <View style={appStyle.flex1}>
        <Text numberOfLines={2} style={[labelStyle, styles.labelText]}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={[labelStyle, styles.descriptionText]}>
          {item.description}
        </Text>
      </View>
      <PressableText
        pressProps={{
          style: styles.button,
        }}
        textProps={{style: styles.buttonChild}}
        text="🗑️"
        onPress={handleDeleteOnPress}
      />
    </View>
  );
};
