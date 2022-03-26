import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React, { memo, useState } from 'react';

import { API_URL, ROUTES } from '../../constants';
import { Maybe, Work } from '../../graphql/generated/graphql';
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
  work?: Maybe<Work>;
  id?: string | null;
};

export const ProjectCard = memo(({ work, id }: Props) => {
  const [isShowDescription, setDescription] = useState(false);

  const handleOpen = () => {
    setDescription((prev) => !prev);
  };

  return (
    <article>
      <Link href={ROUTES.works + '/' + id}>
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
              alt={work?.poster?.data?.attributes?.name}
              src={API_URL + work?.poster?.data?.attributes?.url}
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
      <Link href={ROUTES.works + '/' + id}>
        <LinkStyled>
          <Typography noWrap variant={'h5'}>
            {work?.title}
          </Typography>
        </LinkStyled>
      </Link>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';
