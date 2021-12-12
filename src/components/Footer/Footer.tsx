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
import {
  BottomWrapper,
  BottomWrapperInner,
  FooterBottom,
  FooterList,
  Link as LinkStyled,
  ListItem,
  SocialLink,
  SocialsWrapper,
  TopWrapper,
  TopWrapperInner,
} from './styles';

export const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  return (
    <footer>
      <TopWrapper>
        <Layout>
          <TopWrapperInner>
            <Box width={isMobile ? 180 : 230}>
              <Image
                alt={'logo'}
                layout={'responsive'}
                src={require('../../../public/images/logoFooter.svg')}
              />
            </Box>
            <SocialsWrapper>
              <a href='#' target={'_blank'}>
                <InstagramIcon />
              </a>
              <SocialLink href='#' target={'_blank'}>
                <FacebookIcon />
              </SocialLink>
              <SocialLink href='#' target={'_blank'}>
                <GitHubIcon />
              </SocialLink>
            </SocialsWrapper>
          </TopWrapperInner>
        </Layout>
      </TopWrapper>
      <BottomWrapper>
        <Layout>
          <BottomWrapperInner>
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
              <FooterList>
                <ListItem>
                  <Link href={'#'}>
                    <LinkStyled>Название проекта 1</LinkStyled>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}>
                    <LinkStyled>Название проекта 2</LinkStyled>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}>
                    <LinkStyled>Название проекта 3</LinkStyled>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}>
                    <LinkStyled>Название проекта 4</LinkStyled>
                  </Link>
                </ListItem>
              </FooterList>
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
                <LinkStyled href='mailto:levenokk@gmail.com'>
                  levenokk@gmail.com
                </LinkStyled>
              </Box>
              <Box mb={'10px'} display={'flex'} alignItems={'center'}>
                <Box mr={'9px'}>
                  <LocalPhoneIcon color={'primary'} />
                </Box>
                <LinkStyled href='tel:+38 (068) 083-64-70'>
                  +38 (068) 083-64-70
                </LinkStyled>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Box mr={'9px'}>
                  <RoomIcon color={'primary'} />
                </Box>
                <LinkStyled href={'#'}>Украина, Киев</LinkStyled>
              </Box>
            </Box>
          </BottomWrapperInner>
        </Layout>
      </BottomWrapper>
      <FooterBottom>
        <Typography
          fontSize={isMobile ? 14 : 16}
          variant={'body2'}
          textAlign={'center'}
        >
          Levenokk 2021 © Все права защищены
        </Typography>
      </FooterBottom>
    </footer>
  );
};
