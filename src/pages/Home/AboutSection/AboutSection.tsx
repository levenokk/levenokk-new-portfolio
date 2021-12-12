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

export const AboutSection = () => {
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
              К
            </Typography>
            то я?
          </Typography>
          <Typography color={'grey.400'} variant={'body1'}>
            Основная информация обо мне и чем я занимаюсь
          </Typography>
          <ContentWrapper>
            <ImageWrapper>
              <Image alt={''} src={meImage} layout={'responsive'} />
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
                <Grid>
                  <Typography variant={'body2'}>
                    <Typography
                      fontWeight={'bold'}
                      fontFamily={'inherit'}
                      fontSize={'inherit'}
                      component={'strong'}
                    >
                      Моя почта:
                    </Typography>{' '}
                    <Link
                      href='mailto:levenokk@gmail.com'
                      target={'_blank'}
                      rel='noreferrer'
                    >
                      levenokk@gmail.com
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
                        Я в соц сетях:
                      </Typography>
                    </Typography>
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
                    <Link href='tel:+38 (068) 083-64-70'>
                      +38 (068) 083-64-70
                    </Link>
                  </Typography>
                </Grid>
              </Element>

              <Button
                fullWidth={isMobile}
                startIcon={<CloudDownloadIcon />}
                variant={'contained'}
              >
                Загрузить моё резюме
              </Button>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </Element>
  );
};
