import React, {forwardRef} from 'react';

// modules
import {Keyboard, View, ViewStyle} from 'react-native';
import {useForm} from 'react-hook-form';

// theme
import {spacing, appStyle} from 'src/theme';

// components
import {Button} from 'src/components/atoms';
import {TextFieldController} from 'src/components/molecules';

export type TodoFormRef = {};

type Props = {
  addOnPress: (title: string, description: string) => void;
  cancelOnPress: () => void;
};

type FormData = {
  title: string;
  description: string;
};

export const TodoForm = forwardRef<TodoFormRef, Props>(function NoteForm(
  {addOnPress = () => undefined, cancelOnPress = () => undefined},
  _ref,
) {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  function onDismiss() {
    reset();
    Keyboard.dismiss();
  }

  const onSubmit = (data: FormData) => {
    onDismiss();
    addOnPress(data.title, data.description);
  };

  const handleCancelOnPress = () => {
    onDismiss();
    cancelOnPress();
  };

  return (
    <View>
      <TextFieldController<FormData>
        control={control}
        name="title"
        label="New Todo"
        error={errors.title && 'Title is required'}
        rules={{required: true}}
      />
      <View style={appStyle.spaceSM} />
      <TextFieldController<FormData>
        control={control}
        name="description"
        label="Description"
        error={errors.description && 'Description is required'}
        rules={{required: true}}
      />
      <View style={appStyle.spaceSM} />
      <View style={appStyle.row}>
        <Button style={$button} preset="reversed" onPress={handleCancelOnPress}>
          Cancel
        </Button>
        <View style={appStyle.spaceSM} />
        <Button style={$button} onPress={handleSubmit(onSubmit)}>
          Add
        </Button>
      </View>
      <View style={appStyle.spaceSM} />
    </View>
  );
});

const $button: ViewStyle = {
  flex: 1,
  marginTop: spacing.md,
};
