import { Box, TextField as MTextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';

import { useStyles } from './styles';

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
  const classes = useStyles();

  const { handleChange, handleBlur, getFieldMeta } = useFormikContext();
  const { value, error } = getFieldMeta(name);

  const inputProps: TextFieldProps = {
    onChange: handleChange,
    label,
    name,
    onBlur: handleBlur,
    value,
    error: Boolean(error),
    helperText: error,
    multiline,
    rows,
  };

  return (
    <Box className={classes.wrapper}>
      <MTextField {...inputProps} variant='standard' fullWidth />
    </Box>
  );
};
