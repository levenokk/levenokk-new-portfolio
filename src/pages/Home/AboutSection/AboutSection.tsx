import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';

import meImage from '../../../../public/images/i.jpg';
import { Layout } from '../../../components';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
} from '../../../components/icons';
import { theme } from '../../../theme/theme';
import { useStyles } from './styles';

export const AboutSection = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  return (
    <Element name={'about'}>
      <Layout>
        <section className={classes.wrapper}>
          <Typography variant={'h2'}>
            <Typography
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'inherit'}
              component={'span'}
              color={'primary.main'}
            >
              К
            </Typography>
            то я?
          </Typography>
          <Typography color={'grey.400'} variant={'body1'}>
            Основная информация обо мне и чем я занимаюсь
          </Typography>
          <Box className={classes.contentWrapper}>
            <Box className={classes.imageWrapper}>
              <Image src={meImage} layout={'responsive'} />
            </Box>
            <Box className={classes.content}>
              <Typography variant={'h3'} mb={'16px'}>
                <Typography
                  fontWeight={'inherit'}
                  fontFamily={'inherit'}
                  fontSize={'inherit'}
                  component={'span'}
                  color={'#B7FF7F'}
                >
                  Привет,
                </Typography>{' '}
                меня зовут Максим!
              </Typography>
              <Typography mb={'16px'} variant={'body2'}>
                Разнообразный и богатый опыт постоянное информационно-
                пропагандистское обеспечение нашей деятельности требуют от нас
                анализа существенных финансовых и административных условий.
                Задача организации, в особенности же консультация с широким
                активом позволяет оценить значение систем массового участия.
              </Typography>
              <Typography variant={'body2'}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily={'inherit'}
                  fontSize={'inherit'}
                  component={'strong'}
                >
                  Вот что я знаю:
                </Typography>{' '}
                JavaScript, jquery, react, vue, next, nuxt, nest, express,
                nodeJs, mongoDb, fireBase, wordpress, mysql
              </Typography>
              <Element name={'contacts'}>
                <Box className={classes.grid}>
                  <Typography variant={'body2'}>
                    <Typography
                      fontWeight={'bold'}
                      fontFamily={'inherit'}
                      fontSize={'inherit'}
                      component={'strong'}
                    >
                      Моя почта:
                    </Typography>{' '}
                    <a
                      className={classes.link}
                      href='mailto:levenokk@gmail.com'
                      target={'_blank'}
                      rel='noreferrer'
                    >
                      levenokk@gmail.com
                    </a>
                  </Typography>
                  <Box flexWrap={'wrap'} display={'flex'}>
                    <Typography mr={'23px'} variant={'body2'}>
                      <Typography
                        fontWeight={'bold'}
                        fontFamily={'inherit'}
                        fontSize={'inherit'}
                        component={'strong'}
                      >
                        Я в соц сетях:
                      </Typography>
                    </Typography>
                    <Box className={classes.socialsWrapper}>
                      <a href='#' target={'_blank'}>
                        <InstagramIcon />
                      </a>
                      <a
                        className={classes.socialLink}
                        href='#'
                        target={'_blank'}
                      >
                        <FacebookIcon />
                      </a>
                      <a
                        className={classes.socialLink}
                        href='#'
                        target={'_blank'}
                      >
                        <GitHubIcon />
                      </a>
                    </Box>
                  </Box>

                  <Typography variant={'body2'}>
                    <Typography
                      fontWeight={'bold'}
                      fontFamily={'inherit'}
                      fontSize={'inherit'}
                      component={'strong'}
                    >
                      Мой телефон:
                    </Typography>{' '}
                    <a className={classes.link} href='tel:+38 (068) 083-64-70'>
                      +38 (068) 083-64-70
                    </a>
                  </Typography>
                </Box>
              </Element>

              <Button
                fullWidth={isMobile}
                startIcon={<CloudDownloadIcon />}
                variant={'contained'}
              >
                Загрузить моё резюме
              </Button>
            </Box>
          </Box>
        </section>
      </Layout>
    </Element>
  );
};
