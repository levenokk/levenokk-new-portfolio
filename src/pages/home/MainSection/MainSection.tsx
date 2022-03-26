import AccessibilityIcon from '@mui/icons-material/Accessibility';
import WorkIcon from '@mui/icons-material/Work';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Element, Link } from 'react-scroll';

import mainImage from '../../../../public/images/main.svg';
import { Layout } from '../../../components';
import { ButtonsWrapper, LeftWrapper, RightWrapper, Wrapper } from './styles';

export const MainSection = () => {
  const theme = useTheme();
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
              reating websites and applications
            </Typography>
            <Typography mb={'32px'} color={'grey.400'} variant={'body1'}>
              This is website has been created for provide additional
              information about me
            </Typography>
            <ButtonsWrapper>
              <Box
                flexGrow={1}
                mb={isMobile ? '10px' : 0}
                mr={isMobile ? 0 : '10px'}
              >
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'portfolio'}
                >
                  <Button
                    fullWidth
                    variant={'contained'}
                    startIcon={<WorkIcon />}
                  >
                    Portfolio
                  </Button>
                </Link>
              </Box>
              <Box flexGrow={1} ml={isMobile ? 0 : '10px'}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'about'}
                >
                  <Button
                    variant={'text'}
                    fullWidth
                    startIcon={<AccessibilityIcon />}
                  >
                    More about me
                  </Button>
                </Link>
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
