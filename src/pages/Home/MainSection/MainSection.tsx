import AccessibilityIcon from '@mui/icons-material/Accessibility';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import mainImage from '../../../../public/images/main.svg';
import { useStyles } from './styles';

export const MainSection = () => {
  const classes = useStyles();

  return (
    <main className={classes.wrapper}>
      <Box className={classes.leftWrapper}>
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
        <Box className={classes.buttonsWrapper}>
          <Box flexGrow={1} mr={'10px'}>
            <Button fullWidth variant={'contained'} startIcon={<WorkIcon />}>
              Портфолио
            </Button>
          </Box>
          <Box flexGrow={1} ml={'10px'}>
            <Button
              variant={'text'}
              fullWidth
              startIcon={<AccessibilityIcon />}
            >
              Больше обо мне
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.rightWrapper}>
        <Image src={mainImage} layout={'responsive'} />
      </Box>
    </main>
  );
};
