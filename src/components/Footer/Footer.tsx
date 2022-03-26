import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import RoomIcon from '@mui/icons-material/Room';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Element } from 'react-scroll';

import { ROUTES } from '../../constants';
import {
  ResumeEntityResponse,
  WorkEntity,
} from '../../graphql/generated/graphql';
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

type Props = {
  works?: WorkEntity[];
  resumeData: ResumeEntityResponse;
};

export const Footer = ({ works, resumeData }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  return (
    <footer>
      <TopWrapper>
        <Layout>
          <TopWrapperInner>
            <Box width={isMobile ? 180 : 230}>
              <Link href={ROUTES.home}>
                <a>
                  <Image
                    alt={'logo'}
                    layout={'responsive'}
                    src={require('../../../public/images/logoFooter.svg')}
                  />
                </a>
              </Link>
            </Box>
            <SocialsWrapper>
              <a
                href='https://www.instagram.com/mstroilo/'
                target={'_blank'}
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
              <SocialLink
                href='https://www.facebook.com/profile.php?id=100021807906705'
                target={'_blank'}
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink href='https://github.com/levenokk' target={'_blank'}>
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
                Motivation
              </Typography>
              <Typography color={'grey.400'} variant={'body1'}>
                I like do something interesting and i decided make this web
                site.I have been learning IT more than 4 years and it`s my
                hobby. I like learning and complexity projects that help me
                become better in the future
              </Typography>
            </Box>

            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                My skills
              </Typography>
              <Typography color={'grey.400'} variant={'body1'}>
                {resumeData?.data?.attributes?.skils}
              </Typography>
            </Box>

            <Box>
              <Typography
                mb={'25px'}
                textAlign={'left'}
                fontSize={20}
                variant={'h5'}
              >
                Portfolio
              </Typography>
              <FooterList>
                {works?.map((work) => (
                  <ListItem key={work.id}>
                    <Link href={ROUTES.works + '/' + work?.id}>
                      <LinkStyled>{work.attributes?.title}</LinkStyled>
                    </Link>
                  </ListItem>
                ))}
              </FooterList>
            </Box>
            <Box>
              <Element name={'contacts'}>
                <Typography
                  mb={'25px'}
                  textAlign={'left'}
                  fontSize={20}
                  variant={'h5'}
                >
                  My contacts
                </Typography>
                <Box mb={'10px'} display={'flex'} alignItems={'center'}>
                  <Box mr={'9px'}>
                    <MarkEmailUnreadIcon color={'primary'} />
                  </Box>
                  <LinkStyled
                    href={`mailto:${
                      resumeData?.data?.attributes?.email ||
                      'levenokk@gmail.com'
                    }`}
                  >
                    {resumeData?.data?.attributes?.email}
                  </LinkStyled>
                </Box>
                <Box mb={'10px'} display={'flex'} alignItems={'center'}>
                  <Box mr={'9px'}>
                    <LocalPhoneIcon color={'primary'} />
                  </Box>
                  <LinkStyled
                    href={`tel:${
                      resumeData?.data?.attributes?.phone ||
                      '+38 (068) 083-64-70'
                    }`}
                  >
                    {resumeData?.data?.attributes?.phone}
                  </LinkStyled>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                  <Box mr={'9px'}>
                    <RoomIcon color={'primary'} />
                  </Box>
                  <LinkStyled href={'#'}>Ukraine, Kyiv</LinkStyled>
                </Box>
              </Element>
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
          Levenokk 2021-{new Date().getFullYear()} © All right protected
        </Typography>
      </FooterBottom>
    </footer>
  );
};
