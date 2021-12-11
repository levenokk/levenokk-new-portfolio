import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import tempImage from '../../../public/images/temp.png';
import { useStyles } from './styles';

export const ProjectCard = () => {
  const [isShowDescription, setDescription] = useState(false);

  const classes = useStyles({ isShowDescription });

  const handleOpen = () => {
    setDescription((prev) => !prev);
  };

  return (
    <article>
      <Link href={'/'}>
        <a>
          <Box position={'relative'} className={classes.imageWrapper}>
            <Box className={classes.description}>
              <Typography color={'common.white'} variant={'body1'}>
                Разнообразный и богатый опыт постоянное информационно-
                пропагандистское обеспечение нашей деятельности требуют от нас
                анализа существенных финансовых и административных условий
              </Typography>
            </Box>
            <Image
              className={classes.image}
              src={tempImage}
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'center'}
            />
          </Box>
        </a>
      </Link>
      <Box className={classes.buttonWrapper}>
        <Button
          onClick={handleOpen}
          variant={'contained'}
          className={classes.button}
        >
          <ChevronRightIcon fontSize={'large'} />
        </Button>
      </Box>
      <Link href={'/'}>
        <a className={classes.link}>
          <Typography variant={'h5'}>
            Проект Максика с названием большим
          </Typography>
        </a>
      </Link>
    </article>
  );
};
