import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Element } from 'react-scroll';

import { Layout, ProjectCard } from '../../../components';
import { ROUTES } from '../../../constants';
import { WorkEntity } from '../../../graphql/generated/graphql';
import { Icon, Projects, Wrapper } from './styles';

type Props = {
  works: WorkEntity[];
};

export const PortfolioSection = ({ works }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.works, undefined, {
      shallow: true,
    });
  };

  return (
    <Element name={'portfolio'}>
      <Wrapper>
        <Layout>
          <Typography mb={'6px'} textAlign={'center'} variant={'h2'}>
            <Typography
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'inherit'}
              component={'span'}
              color={'primary.main'}
            >
              P
            </Typography>
            ortfolio
          </Typography>
          <Typography
            mb={'45px'}
            color={'grey.400'}
            textAlign={'center'}
            variant={'body1'}
          >
            there are collected my latest works
          </Typography>
          <Projects>
            {works?.map((work) => (
              <ProjectCard id={work.id} work={work.attributes} key={work.id} />
            ))}
          </Projects>
          <Box width={300} mx={'auto'}>
            <Button
              onClick={handleClick}
              fullWidth
              startIcon={<Icon />}
              variant={'contained'}
            >
              Show more
            </Button>
          </Box>
        </Layout>
      </Wrapper>
    </Element>
  );
};
