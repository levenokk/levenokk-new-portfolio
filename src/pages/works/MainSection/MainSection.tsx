import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import { Layout, ProjectCard } from '../../../components';
import { Projects, Wrapper } from './styles';

export const MainSection = () => {
  return (
    <Layout>
      <Wrapper>
        <Typography
          mb={'15px'}
          component={'h1'}
          variant={'h2'}
          textAlign={'center'}
        >
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
        <Box mb={'45px'} maxWidth={960} mx={'auto'}>
          <Typography variant={'body1'} textAlign={'center'}>
            Разнообразный и богатый опыт постоянное информационно-
            пропагандистское обеспечение нашей деятельности требуют от нас
            анализа существенных финансовых и административных условий. Задача
            организации, в особенности же консультация с широким активом
            позволяет оценить значение систем массового участия.
          </Typography>
        </Box>
        <Projects>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Projects>
        <Box width={300} mx={'auto'}>
          <Button fullWidth variant={'contained'}>
            Показать больше
          </Button>
        </Box>
      </Wrapper>
    </Layout>
  );
};
