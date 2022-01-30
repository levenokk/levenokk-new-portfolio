import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../../components';
import { client } from '../../../graphql/client';
import {
  GetWorkQuery,
  GetWorkQueryVariables,
  GetWorksQuery,
  GetWorksQueryVariables,
  Works,
} from '../../../graphql/generated/graphql';
import { GET_WORK } from '../../../graphql/queries/getWork.gql';
import { GET_WORKS } from '../../../graphql/queries/getWorks.gql';
import { MainSection } from './MainSection/MainSection';
import { SimilarWorksSection } from './SimilarWorksSection/SimilarWorksSection';

type Props = {
  works: Works;
  work: GetWorkQuery;
};

export default function Work({ works, work }: Props) {
  return (
    <>
      <Header />
      <MainSection work={work.getWork as any} />
      <SimilarWorksSection works={works.rows} />
      <FormSection />
      <Footer works={works.rows} />
      <UpButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const works = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    variables: {
      offset: 0,
      limit: 3,
    },
  });

  const work = await client.query<GetWorkQuery, GetWorkQueryVariables>({
    query: GET_WORK,
    variables: {
      id: params?.id as string,
    },
  });

  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      works: works.data.getWorks,
      work: work.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageData = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    variables: {
      offset: 0,
      limit: 10000,
    },
  });

  const paths = pageData.data.getWorks.rows.map((work) => ({
    params: { id: work.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
