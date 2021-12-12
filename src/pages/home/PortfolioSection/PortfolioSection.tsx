import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Element } from 'react-scroll';

import { Layout, ProjectCard } from '../../../components';
import { ROUTES } from '../../../constants';
import { Icon, Projects, Wrapper } from './styles';

export const PortfolioSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.works, undefined, {
      shallow: true,
    });
  };

  return (
    <Element name={'portfolio'}>
      <Wrapper>
        <Layout>
          <Typography mb={'6px'} textAlign={'center'} variant={'h2'}>
            <Typography
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'inherit'}
              component={'span'}
              color={'primary.main'}
            >
              П
            </Typography>
            ортфолио
          </Typography>
          <Typography
            mb={'45px'}
            color={'grey.400'}
            textAlign={'center'}
            variant={'body1'}
          >
            Тут собраны все мои работы за последнее время
          </Typography>
          <Projects>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Projects>
          <Box width={300} mx={'auto'}>
            <Button
              onClick={handleClick}
              fullWidth
              startIcon={<Icon />}
              variant={'contained'}
            >
              Показать больше
            </Button>
          </Box>
        </Layout>
      </Wrapper>
    </Element>
  );
};
