import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import { ProjectCard } from '../../../components';
import { useStyles } from './styles';

export const PortfolioSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
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
      <Box className={classes.projects}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
      <Box width={300} mx={'auto'}>
        <Button
          fullWidth
          startIcon={<ChevronRightIcon className={classes.icon} />}
          variant={'contained'}
        >
          Показать больше
        </Button>
      </Box>
    </section>
  );
};
