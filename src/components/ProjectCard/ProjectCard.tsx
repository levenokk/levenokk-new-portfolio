import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

import tempImage from '../../../public/images/temp.png';
import { ROUTES } from '../../constants';
import {
  Button,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  Image,
  ImageWrapper,
  Link as LinkStyled,
} from './styles';

export const ProjectCard = () => {
  const [isShowDescription, setDescription] = useState(false);

  const handleOpen = () => {
    setDescription((prev) => !prev);
  };

  return (
    <article>
      <Link href={ROUTES.works + '/1'}>
        <a>
          <ImageWrapper position={'relative'}>
            <Description isActive={isShowDescription}>
              <DescriptionWrapper>
                <Typography color={'common.white'} variant={'body1'}>
                  Разнообразный и богатый опыт постоянное информационно-
                  пропагандистское обеспечение нашей деятельности требуют от нас
                  анализа существенных финансовых и административных условий
                </Typography>
              </DescriptionWrapper>
            </Description>
            <Image
              alt={''}
              src={tempImage}
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'center'}
            />
          </ImageWrapper>
        </a>
      </Link>
      <ButtonWrapper>
        <Button
          isActive={isShowDescription}
          onClick={handleOpen}
          variant={'contained'}
        >
          <ChevronRightIcon fontSize={'large'} />
        </Button>
      </ButtonWrapper>
      <Link href={ROUTES.works + '/1'}>
        <LinkStyled>
          <Typography variant={'h5'}>
            Проект Максика с названием большим
          </Typography>
        </LinkStyled>
      </Link>
    </article>
  );
};
