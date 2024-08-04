import React, {forwardRef, Ref, useImperativeHandle, useRef} from 'react';

// modules
import {Keyboard, TextInput, View, ViewStyle} from 'react-native';
import {useForm} from 'react-hook-form';

// theme
import {spacing, appStyle} from 'src/theme';

// components
import {Button} from 'src/components/atoms';
import {TextFieldController} from 'src/components/molecules';

export type TodoFormRef = {
  focusTitle: () => void;
  focusDescription: () => void;
};

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
  _ref: Ref<TodoFormRef>,
) {
  const titleRef = useRef<TextInput>(null);
  const desRef = useRef<TextInput>(null);

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

  useImperativeHandle(_ref, () => ({
    focusTitle: () => {
      titleRef.current?.focus();
    },
    focusDescription: () => {
      desRef.current?.focus();
    },
  }));

  return (
    <View>
      {/*@ts-ignore*/}
      <TextFieldController<FormData>
        ref={titleRef}
        control={control}
        name="title"
        label="New Task"
        error={errors.title && 'Title is required'}
        rules={{required: true}}
        TextInputProps={{
          returnKeyType: 'next',
          onSubmitEditing: () => desRef.current?.focus(),
        }}
      />
      <View style={appStyle.spaceSM} />
      {/*@ts-ignore*/}
      <TextFieldController<FormData>
        ref={desRef}
        control={control}
        name="description"
        label="Note"
        error={errors.description && 'Description is required'}
        rules={{required: true}}
        TextInputProps={{
          returnKeyType: 'done',
        }}
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
