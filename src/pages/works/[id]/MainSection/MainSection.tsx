import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LanguageIcon from '@mui/icons-material/Language';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Divider, Link, Typography } from '@mui/material';
import React from 'react';

import { Layout } from '../../../../components';
import { Maybe, WorkEntity } from '../../../../graphql/generated/graphql';
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
  work?: Maybe<WorkEntity>;
};

export const MainSection = ({ work }: Props) => {
  return (
    <Wrapper>
      <Layout>
        <WrapperTop>
          <SliderWrapper>
            <MainSectionSlider images={work?.attributes?.images?.data} />
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
                {work?.attributes?.title[0]}
              </Typography>
              {work?.attributes?.title?.slice(1)}
            </Typography>
            <LinkWrapper>
              <LanguageIcon color={'primary'} />
              <Link ml={'5px'} href={work?.attributes?.link || '#'}>
                {work?.attributes?.link}
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
                  {work?.attributes?.client_name}
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
                  {work?.attributes?.date_end}
                </Typography>
              </LinkWrapper>
            </LinksWrapper>
            {work?.attributes?.descriptions?.map((description) => (
              <Typography key={description?.id} mb={'10px'} variant={'body1'}>
                {description?.text}
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
              {work?.attributes?.targets?.map((target) => (
                <ListItem key={target?.id}>
                  <Typography>{target?.text}</Typography>
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
              {work?.attributes?.executed_tasks?.map((executed_task) => (
                <ListItem key={executed_task?.id}>
                  <Typography>{executed_task?.text}</Typography>
                </ListItem>
              ))}
            </List>
          </RightItem>
        </WrapperBottom>
      </Layout>
    </Wrapper>
  );
};
