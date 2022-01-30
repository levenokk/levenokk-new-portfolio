import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { memo, useState } from 'react';

import tempImage from '../../../public/images/temp.png';
import { ROUTES } from '../../constants';
import { Work } from '../../graphql/generated/graphql';
import {
  Button,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  Image,
  ImageWrapper,
  Link as LinkStyled,
} from './styles';

type Props = {
  work: Work;
};

export const ProjectCard = memo(({ work }: Props) => {
  const [isShowDescription, setDescription] = useState(false);

  const handleOpen = () => {
    setDescription((prev) => !prev);
  };

  return (
    <article>
      <Link href={ROUTES.works + '/' + work?.id}>
        <a>
          <ImageWrapper position={'relative'}>
            <Description isActive={isShowDescription}>
              <DescriptionWrapper>
                <Typography color={'common.white'} variant={'body1'}>
                  {work?.short_description}
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
      <Link href={ROUTES.works + '/' + work?.id}>
        <LinkStyled>
          <Typography noWrap variant={'h5'}>
            {work?.name}
          </Typography>
        </LinkStyled>
      </Link>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';
