import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
import { API_URL } from '../../../constants';
import { ResumeEntityResponse } from '../../../graphql/generated/graphql';
import {
  Content,
  ContentWrapper,
  Grid,
  ImageWrapper,
  Link,
  SocialLink,
  SocialsWrapper,
  Wrapper,
} from './styles';

type Props = {
  resumeData: ResumeEntityResponse;
};

export const AboutSection = ({ resumeData }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  return (
    <Element name={'about'}>
      <Layout>
        <Wrapper>
          <Typography variant={'h2'}>
            <Typography
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'inherit'}
              component={'span'}
              color={'primary.main'}
            >
              {resumeData?.data?.attributes?.title[0]}
            </Typography>
            {resumeData?.data?.attributes?.title?.slice(1)}
          </Typography>
          <Typography color={'grey.400'} variant={'body1'}>
            {resumeData?.data?.attributes?.sub_title}
          </Typography>
          <ContentWrapper>
            <ImageWrapper>
              <Image
                width={
                  resumeData?.data?.attributes?.image?.data?.attributes
                    ?.width || 0
                }
                height={
                  resumeData?.data?.attributes?.image?.data?.attributes
                    ?.height || 0
                }
                alt={
                  resumeData?.data?.attributes?.image?.data?.attributes?.name
                }
                src={
                  API_URL +
                    resumeData?.data?.attributes?.image?.data?.attributes
                      ?.url || meImage
                }
                layout={'responsive'}
              />
            </ImageWrapper>
            <Content>
              <Typography variant={'h3'} mb={'16px'}>
                <Typography
                  fontWeight={'inherit'}
                  fontFamily={'inherit'}
                  fontSize={'inherit'}
                  component={'span'}
                  color={'#B7FF7F'}
                >
                  {resumeData?.data?.attributes?.name?.split(' ')[0]}
                </Typography>{' '}
                {resumeData?.data?.attributes?.name
                  ?.split(' ')
                  ?.slice(1)
                  ?.join(' ')}
              </Typography>
              <Typography mb={'16px'} variant={'body2'}>
                {resumeData?.data?.attributes?.description}
              </Typography>
              <Typography variant={'body2'}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily={'inherit'}
                  fontSize={'inherit'}
                  component={'strong'}
                >
                  {resumeData?.data?.attributes?.my_skils_title}
                </Typography>{' '}
                {resumeData?.data?.attributes?.skils}
              </Typography>
              <Element name={'contacts'}>
                <Grid>
                  <Typography variant={'body2'}>
                    <Typography
                      fontWeight={'bold'}
                      fontFamily={'inherit'}
                      fontSize={'inherit'}
                      component={'strong'}
                    >
                      Email:
                    </Typography>{' '}
                    <Link
                      href={`mailto:${
                        resumeData?.data?.attributes?.email ||
                        'levenokk@gmail.com'
                      }`}
                      target={'_blank'}
                      rel='noreferrer'
                    >
                      {resumeData?.data?.attributes?.email}
                    </Link>
                  </Typography>
                  <Box flexWrap={'wrap'} display={'flex'}>
                    <Typography mr={'23px'} variant={'body2'}>
                      <Typography
                        fontWeight={'bold'}
                        fontFamily={'inherit'}
                        fontSize={'inherit'}
                        component={'strong'}
                      >
                        i in social networks:
                      </Typography>
                    </Typography>
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
                      <SocialLink
                        href='https://github.com/levenokk'
                        target={'_blank'}
                      >
                        <GitHubIcon />
                      </SocialLink>
                    </SocialsWrapper>
                  </Box>

                  <Typography variant={'body2'}>
                    <Typography
                      fontWeight={'bold'}
                      fontFamily={'inherit'}
                      fontSize={'inherit'}
                      component={'strong'}
                    >
                      Phone number:
                    </Typography>{' '}
                    <Link
                      href={`tel:${
                        resumeData?.data?.attributes?.phone ||
                        '+38 (068) 083-64-70'
                      } `}
                    >
                      {resumeData?.data?.attributes?.phone}
                    </Link>
                  </Typography>
                </Grid>
              </Element>

              <Button
                href={
                  API_URL +
                    resumeData?.data?.attributes?.file?.data?.attributes?.url ||
                  '#'
                }
                download
                fullWidth={isMobile}
                startIcon={<CloudDownloadIcon />}
                variant={'contained'}
              >
                Download my resume
              </Button>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </Element>
  );
};
