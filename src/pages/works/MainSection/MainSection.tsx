import { LoadingButton as Button } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { Layout, ProjectCard } from '../../../components';
import { Work } from '../../../graphql/generated/graphql';
import { useGetWorksQuery } from '../../../hooks/queries';
import { Projects, Wrapper } from './styles';

export const MainSection = () => {
  const [offset, setOffset] = useState(9);
  const { data, loading, fetchMore } = useGetWorksQuery();

  const handleLoadMore = async () => {
    await fetchMore({
      variables: {
        offset,
        limit: 9,
      },
    });

    setOffset((prev) => prev + 9);
  };

  return (
    <Layout>
      <Wrapper>
        <Typography
          mb={'15px'}
          component={'h1'}
          variant={'h2'}
          textAlign={'center'}
        >
          <Typography
            fontWeight={'inherit'}
            fontFamily={'inherit'}
            fontSize={'inherit'}
            component={'span'}
            color={'primary.main'}
          >
            П
          </Typography>
          ортфолио
        </Typography>
        <Box mb={'45px'} maxWidth={960} mx={'auto'}>
          <Typography variant={'body1'} textAlign={'center'}>
            Разнообразный и богатый опыт постоянное информационно-
            пропагандистское обеспечение нашей деятельности требуют от нас
            анализа существенных финансовых и административных условий. Задача
            организации, в особенности же консультация с широким активом
            позволяет оценить значение систем массового участия.
          </Typography>
        </Box>
        <Projects>
          {data?.getWorks?.rows?.map((work) => (
            <ProjectCard work={work as Work} key={work.id} />
          ))}
        </Projects>
        <Box width={300} mx={'auto'}>
          <Button
            loading={loading}
            onClick={handleLoadMore}
            disabled={
              (data?.getWorks?.count || 0) <=
              (data?.getWorks?.rows?.length || 0)
            }
            fullWidth
            variant={'contained'}
          >
            Показать больше
          </Button>
        </Box>
      </Wrapper>
    </Layout>
  );
};
