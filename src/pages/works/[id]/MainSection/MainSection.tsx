import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LanguageIcon from '@mui/icons-material/Language';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Divider, Link, Typography } from '@mui/material';
import React from 'react';

import { Layout } from '../../../../components';
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

export const MainSection = () => {
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
                Н
              </Typography>
              азвание проекта Максика
            </Typography>
            <LinkWrapper>
              <LanguageIcon color={'primary'} />
              <Link ml={'5px'} href={'#'}>
                https://material.io/design/material-studies/shrine.html#product-architecture
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
                  Евгений Сморыгин
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
                  2 месяца
                </Typography>
              </LinkWrapper>
            </LinksWrapper>
            <Typography mb={'10px'} variant={'body1'}>
              Разнообразный и богатый опыт постоянное информационно-
              пропагандистское обеспечение нашей деятельности требуют от нас
              анализа существенных финансовых и административных условий. Задача
              организации, в особенности же консультация с широким активом
              позволяет оценить значение систем массового участия.
            </Typography>
            <Typography mb={'10px'} variant={'body1'}>
              Разнообразный и богатый опыт постоянное информационно-
              пропагандистское обеспечение нашей деятельности требуют от нас
              анализа существенных финансовых и административных условий. Задача
              организации, в особенности же консультация с широким активом
              позволяет оценить значение систем массового участия.
            </Typography>
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
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
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
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных
                </Typography>
              </ListItem>
            </List>
          </RightItem>
        </WrapperBottom>
      </Layout>
    </Wrapper>
  );
};
