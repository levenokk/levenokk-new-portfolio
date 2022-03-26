import { TextField as MTextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';

import { Wrapper } from './styles';

type Props = {
  label: string;
  name: string;
  multiline?: boolean;
  rows?: number;
};

export const TextField: React.FC<Props> = ({
  label,
  name,
  multiline = false,
  rows,
}) => {
  const { handleChange, handleBlur, getFieldMeta } = useFormikContext();
  const { value, error, touched } = getFieldMeta(name);

  const inputProps: TextFieldProps = {
    onChange: handleChange,
    label,
    name,
    onBlur: handleBlur,
    value,
    error: Boolean(touched && error),
    helperText: touched && error,
    multiline,
    rows,
  };

  return (
    <Wrapper>
      <MTextField {...inputProps} variant='standard' fullWidth />
    </Wrapper>
  );
};
