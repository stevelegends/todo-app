import React, {forwardRef, Ref, useImperativeHandle, useRef} from 'react';

// modules
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {TextInput, TextInputProps} from 'react-native';

// components
import {TextField} from 'src/components/atoms';

type Props<FieldValues> = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  error?: string;
  rules: RegisterOptions;
  TextInputProps: TextInputProps;
};

export const TextFieldController = forwardRef(
  <FieldValues,>(
    {
      control,
      name,
      label,
      error = '',
      rules = {},
      TextInputProps,
    }: Props<FieldValues>,
    ref: Ref<TextInput>,
  ) => {
    const input = useRef<TextInput>(null);
    useImperativeHandle(ref, () => input.current as TextInput);
    return (
      <Controller
        control={control as any}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextField
            ref={input}
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            status={(!!error as boolean) && 'error'}
            helper={error}
            {...TextInputProps}
          />
        )}
        name={name}
      />
    );
  },
);
