import { Typography } from '@mui/material';
import React from 'react';

import { Layout, Slider } from '../../../../components';
import { MainContent, SliderWrapper, Wrapper, WrapperTop } from './styles';

export const MainSection = () => {
  return (
    <Wrapper>
      <Layout>
        <WrapperTop>
          <SliderWrapper>
            <Slider />
          </SliderWrapper>
          <MainContent>
            <Typography component={'h1'} variant={'h2'}>
              <Typography
                fontWeight={'inherit'}
                fontFamily={'inherit'}
                fontSize={'inherit'}
                component={'span'}
                color={'primary.main'}
              >
                Н
              </Typography>
              азвание проекта Максика
            </Typography>
          </MainContent>
        </WrapperTop>
      </Layout>
    </Wrapper>
  );
};
