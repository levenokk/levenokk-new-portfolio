import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';

import formImage from '../../../../public/images/form.svg';
import { Layout, TextField } from '../../../components';
import { Content, FormWrapper, ImageWrapper, Wrapper } from './styles';

export const FormSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  const handleFormSubmit = () => {};

  return (
    <Element name={'form'}>
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
                Н
              </Typography>
              апишите мне
            </Typography>
            <Typography mb={'32px'} color={'grey.400'} variant={'body1'}>
              Оставь свое сообщение и я обязательно отвечу Вам в ближайшее время
            </Typography>
            <Formik onSubmit={handleFormSubmit} initialValues={{}}>
              {({ handleSubmit }) => (
                <FormWrapper>
                  <TextField name={'name'} label={'Ваше имя'} />
                  <TextField name={'email'} label={'Ваше имя'} />
                  <TextField
                    multiline
                    rows={4}
                    name={'message'}
                    label={'Ваше сообщение'}
                  />
                  <Box maxWidth={isMobile ? '100%' : '240px'} mt={'34px'}>
                    <Button
                      startIcon={<MarkEmailUnreadIcon />}
                      fullWidth
                      variant={'contained'}
                      onClick={() => handleSubmit()}
                    >
                      Отправить
                    </Button>
                  </Box>
                </FormWrapper>
              )}
            </Formik>
          </Content>
        </Wrapper>
      </Layout>
    </Element>
  );
};
