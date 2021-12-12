import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { Layout, ProjectCard } from '../../../../components';
import { ROUTES } from '../../../../constants';
import { Icon, Projects, Wrapper } from './styles';

export const SimilarWorksSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.works, undefined, {
      shallow: true,
    });
  };

  return (
    <Wrapper>
      <Layout>
        <Typography mb={'15px'} textAlign={'center'} variant={'h2'}>
          <Typography
            fontWeight={'inherit'}
            fontFamily={'inherit'}
            fontSize={'inherit'}
            component={'span'}
            color={'primary.main'}
          >
            П
          </Typography>
          охожие работы
        </Typography>
        <Typography mb={'45px'} variant={'body1'} textAlign={'center'}>
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
  );
};