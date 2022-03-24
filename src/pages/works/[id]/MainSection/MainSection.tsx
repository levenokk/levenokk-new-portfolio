import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LanguageIcon from '@mui/icons-material/Language';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Divider, Link, Typography } from '@mui/material';
import React from 'react';

import { Layout } from '../../../../components';
import { Work } from '../../../../graphql/generated/graphql';
import { MainSectionSlider } from './MainSectionSlider';
import {
  LeftItem,
  LinksWrapper,
  LinkWrapper,
  List,
  ListItem,
  MainContent,
  RightItem,
  SliderWrapper,
  Wrapper,
  WrapperBottom,
  WrapperTop,
} from './styles';

type Props = {
  work?: Work;
};

export const MainSection = ({ work }: Props) => {
  return (
    <Wrapper>
      <Layout>
        <WrapperTop>
          <SliderWrapper>
            <MainSectionSlider />
          </SliderWrapper>
          <MainContent>
            <Typography mb={'15px'} component={'h1'} variant={'h2'}>
              <Typography
                fontWeight={'inherit'}
                fontFamily={'inherit'}
                fontSize={'inherit'}
                component={'span'}
                color={'primary.main'}
              >
                {work?.name[0]}
              </Typography>
              {work?.name?.slice(1)}
            </Typography>
            <LinkWrapper>
              <LanguageIcon color={'primary'} />
              <Link ml={'5px'} href={work?.link}>
                {work?.link}
              </Link>
            </LinkWrapper>
            <LinksWrapper>
              <LinkWrapper>
                <AccessibilityIcon color={'primary'} />
                <Typography variant={'body1'} ml={'5px'}>
                  <Typography
                    fontWeight={'bold'}
                    fontFamily={'inherit'}
                    fontSize={'inherit'}
                    component={'strong'}
                  >
                    Заказчик:{' '}
                  </Typography>
                  {work?.client_name}
                </Typography>
              </LinkWrapper>
              <LinkWrapper>
                <WatchLaterIcon color={'primary'} />
                <Typography variant={'body1'} ml={'5px'}>
                  <Typography
                    fontWeight={'bold'}
                    fontFamily={'inherit'}
                    fontSize={'inherit'}
                    component={'strong'}
                  >
                    Срок выполнения:{' '}
                  </Typography>
                  {work?.time}
                </Typography>
              </LinkWrapper>
            </LinksWrapper>
            {work?.descriptions?.map(({ id, message }) => (
              <Typography key={id} mb={'10px'} variant={'body1'}>
                {message}
              </Typography>
            ))}
          </MainContent>
        </WrapperTop>
        <Divider />
        <WrapperBottom>
          <LeftItem>
            <Typography
              fontFamily={'Rubik, sans-serif'}
              textAlign={'left'}
              mb={'15px'}
              component={'h3'}
              variant={'h5'}
            >
              Цель проекта
            </Typography>
            <List>
              {work?.targets?.map(({ id, message }) => (
                <ListItem key={id}>
                  <Typography>{message}</Typography>
                </ListItem>
              ))}
            </List>
          </LeftItem>
          <RightItem>
            <Typography
              fontFamily={'Rubik, sans-serif'}
              textAlign={'left'}
              mb={'15px'}
              component={'h3'}
              variant={'h5'}
            >
              Выполненные задачи
            </Typography>
            <List>
              {work?.tasks?.map(({ id, message }) => (
                <ListItem key={id}>
                  <Typography>{message}</Typography>
                </ListItem>
              ))}
            </List>
          </RightItem>
        </WrapperBottom>
      </Layout>
    </Wrapper>
  );
};
