import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { LoadingButton as Button } from '@mui/lab';
import {
  Box,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';

import formImage from '../../../public/images/form.svg';
import { useSendMessageMutation } from '../../hooks/mutations';
import { requestSchema } from '../../validations';
import { Alert, Layout, TextField } from '../index';
import { Content, FormWrapper, ImageWrapper, Wrapper } from './styles';

type Props = {
  isBackground?: boolean;
};

type FormikValues = {
  name: string;
  email: string;
  message: string;
};

export const FormSection: React.FC<Props> = ({ isBackground = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  const [sendMessage, { loading, error }] = useSendMessageMutation();

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleFormSubmit = ({ message, email, name }: FormikValues) => {
    sendMessage({
      variables: {
        data: {
          message,
          name,
          email,
        },
      },
    })
      .then(() => {
        setOpen(true);
      })
      .catch(() => {
        setOpen(true);
      });
  };

  return (
    <Element name={'form'}>
      <Box bgcolor={isBackground ? 'rgba(0, 106, 242, 0.03)' : 'transparent'}>
        <Layout>
          <Wrapper>
            <ImageWrapper>
              <Image alt={''} src={formImage} layout={'responsive'} />
            </ImageWrapper>
            <Content>
              <Typography variant={'h2'}>
                <Typography
                  fontWeight={'inherit'}
                  fontFamily={'inherit'}
                  fontSize={'inherit'}
                  component={'span'}
                  color={'primary.main'}
                >
                  W
                </Typography>
                rite me
              </Typography>
              Leave your message and i will respond you how can faster
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                validationSchema={requestSchema}
              >
                {({ handleSubmit, dirty, isValid }) => (
                  <FormWrapper>
                    <TextField name={'name'} label={'Firstname'} />
                    <TextField name={'email'} label={'Email'} />
                    <TextField
                      multiline
                      rows={4}
                      name={'message'}
                      label={'Your message'}
                    />
                    <Box maxWidth={isMobile ? '100%' : '240px'} mt={'34px'}>
                      <Button
                        loading={loading}
                        disabled={!isValid || !dirty}
                        startIcon={<MarkEmailUnreadIcon />}
                        fullWidth
                        variant={'contained'}
                        onClick={() => handleSubmit()}
                      >
                        Send
                      </Button>
                    </Box>
                  </FormWrapper>
                )}
              </Formik>
            </Content>
          </Wrapper>
        </Layout>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{ width: '500px' }}
        >
          {error ? 'Something went wrong' : 'The message has been sent! Thanks you'}
        </Alert>
      </Snackbar>
    </Element>
  );
};
