import AccessibilityIcon from '@mui/icons-material/Accessibility';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';

import mainImage from '../../../../public/images/main.svg';
import { Layout } from '../../../components';
import { theme } from '../../../theme/theme';
import { ButtonsWrapper, LeftWrapper, RightWrapper, Wrapper } from './styles';

export const MainSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  return (
    <Element name={'main'}>
      <Layout>
        <Wrapper>
          <LeftWrapper>
            <Typography variant={'h1'}>
              <Typography
                fontWeight={'inherit'}
                fontFamily={'inherit'}
                fontSize={'inherit'}
                component={'span'}
                color={'primary.main'}
              >
                C
              </Typography>
              reate sites and apps in minutes
            </Typography>
            <Typography mb={'32px'} color={'grey.400'} variant={'body1'}>
              Максик - лучший веб-разработчик и по жизни красавчик) Становитесь
              настоящим мастерами программирования!
            </Typography>
            <ButtonsWrapper>
              <Box
                flexGrow={1}
                mb={isMobile ? '10px' : 0}
                mr={isMobile ? 0 : '10px'}
              >
                <Button
                  fullWidth
                  variant={'contained'}
                  startIcon={<WorkIcon />}
                >
                  Портфолио
                </Button>
              </Box>
              <Box flexGrow={1} ml={isMobile ? 0 : '10px'}>
                <Button
                  variant={'text'}
                  fullWidth
                  startIcon={<AccessibilityIcon />}
                >
                  Больше обо мне
                </Button>
              </Box>
            </ButtonsWrapper>
          </LeftWrapper>
          <RightWrapper>
            <Image alt={''} src={mainImage} layout={'responsive'} />
          </RightWrapper>
        </Wrapper>
      </Layout>
    </Element>
  );
};
