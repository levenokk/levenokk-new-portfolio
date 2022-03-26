import { LoadingButton as Button } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import { Layout, ProjectCard } from '../../../components';
import { WorkEntity } from '../../../graphql/generated/graphql';
import { useGetWorksLazyQuery } from '../../../hooks/queries';
import { Projects, Wrapper } from './styles';

type Props = {
  works?: WorkEntity[];
};

export const MainSection = ({ works }: Props) => {
  const [data, setData] = useState<WorkEntity[]>(works || []);
  const [getWorks, { loading }] = useGetWorksLazyQuery();

  const offset = useRef(9);

  const handleLoadMore = async () => {
    const { data } = await getWorks({
      variables: {
        pagination: {
          start: offset.current,
          limit: 9,
        },
      },
    });

    if (Array.isArray(data?.works?.data)) {
      const works = data?.works?.data as WorkEntity[];

      setData((prev) => [...prev, ...works]);
    }

    offset.current += 9;
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
          {data?.map((work) => (
            <ProjectCard work={work.attributes} id={work.id} key={work.id} />
          ))}
        </Projects>
        <Box width={300} mx={'auto'}>
          <Button
            loading={loading}
            onClick={handleLoadMore}
            disabled={(10 || 0) <= (data?.length || 0)}
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
