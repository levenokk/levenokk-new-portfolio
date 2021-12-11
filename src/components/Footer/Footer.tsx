import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import RoomIcon from '@mui/icons-material/Room';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { theme } from '../../theme/theme';
import { FacebookIcon, GitHubIcon, InstagramIcon } from '../icons';
import { Layout } from '../Layout/Layout';
import { useStyles } from './styles';

export const Footer = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  return (
    <footer>
      <Box className={classes.topWrapper}>
        <Layout>
          <Box className={classes.topWrapperInner}>
            <Box width={isMobile ? 180 : 230}>
              <Image
                layout={'responsive'}
                src={require('../../../public/images/logoFooter.svg')}
              />
            </Box>
            <Box className={classes.socialsWrapper}>
              <a href='#' target={'_blank'}>
                <InstagramIcon />
              </a>
              <a className={classes.socialLink} href='#' target={'_blank'}>
                <FacebookIcon />
              </a>
              <a className={classes.socialLink} href='#' target={'_blank'}>
                <GitHubIcon />
              </a>
            </Box>
          </Box>
        </Layout>
      </Box>
      <Box className={classes.bottomWrapper}>
        <Layout>
          <Box className={classes.bottomWrapperInner}>
            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                Чем я занимаюсь?
              </Typography>
              <Typography color={'grey.400'} variant={'body1'}>
                Разрабатываю сайты и мобильные приложения. А так же делаю
                анимацию React Native
              </Typography>
            </Box>

            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                Обо мне
              </Typography>
              <Typography color={'grey.400'} variant={'body1'}>
                Описание Навыки
              </Typography>
            </Box>

            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                Портфолио
              </Typography>
              <ul className={classes.footerList}>
                <li className={classes.listItem}>
                  <Link href={'#'}>
                    <a className={classes.link}>Название проекта 1</a>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link href={'#'}>
                    <a className={classes.link}>Название проекта 2</a>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link href={'#'}>
                    <a className={classes.link}>Название проекта 3</a>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link href={'#'}>
                    <a className={classes.link}>Название проекта 4</a>
                  </Link>
                </li>
              </ul>
            </Box>

            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                Контакты
              </Typography>
              <Box mb={'10px'} display={'flex'} alignItems={'center'}>
                <Box mr={'9px'}>
                  <MarkEmailUnreadIcon color={'primary'} />
                </Box>
                <a className={classes.link} href='mailto:levenokk@gmail.com'>
                  levenokk@gmail.com
                </a>
              </Box>
              <Box mb={'10px'} display={'flex'} alignItems={'center'}>
                <Box mr={'9px'}>
                  <LocalPhoneIcon color={'primary'} />
                </Box>
                <a className={classes.link} href='tel:+38 (068) 083-64-70'>
                  +38 (068) 083-64-70
                </a>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Box mr={'9px'}>
                  <RoomIcon color={'primary'} />
                </Box>
                <a href={'#'} className={classes.link}>
                  Украина, Киев
                </a>
              </Box>
            </Box>
          </Box>
        </Layout>
      </Box>
      <Box className={classes.footerBottom}>
        <Typography
          fontSize={isMobile ? 14 : 16}
          variant={'body2'}
          textAlign={'center'}
        >
          Levenokk 2021 © Все права защищены
        </Typography>
      </Box>
    </footer>
  );
};
