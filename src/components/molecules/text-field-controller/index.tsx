import React from 'react';

// modules
import {Control, Controller, RegisterOptions} from 'react-hook-form';

// components
import {TextField} from 'src/components/atoms';

type Props<FieldValues> = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  error?: string;
  rules: RegisterOptions;
};

export function TextFieldController<FieldValues>({
  control,
  name,
  label,
  error = '',
  rules = {},
}: Props<FieldValues>) {
  return (
    <Controller
      control={control as any}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextField
          label={label}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          status={(!!error as boolean) && 'error'}
          helper={error}
        />
      )}
      name={name}
    />
  );
}
