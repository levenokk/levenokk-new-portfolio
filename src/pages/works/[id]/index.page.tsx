import { GetStaticProps } from 'next';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../../components';
import { client } from '../../../graphql/client';
import {
  GetWorkQuery,
  GetWorkQueryVariables,
  GetWorksQuery,
  GetWorksQueryVariables,
  Work as WorkType,
  Works,
} from '../../../graphql/generated/graphql';
import { GET_WORK } from '../../../graphql/queries/getWork.gql';
import { GET_WORKS } from '../../../graphql/queries/getWorks.gql';
import { MainSection } from './MainSection/MainSection';
import { SimilarWorksSection } from './SimilarWorksSection/SimilarWorksSection';

type Props = {
  works: Works | null;
  work: GetWorkQuery | null;
  notFound: boolean;
};

export default function Work({ works, work, notFound }: Props) {
  if (notFound) {
    return <div>404</div>;
  }

  return (
    <>
      <Header />
      <MainSection work={work?.getWork as WorkType} />
      <SimilarWorksSection works={works?.rows.slice(0, 3)} />
      <FormSection />
      <Footer works={works?.rows.slice(0, 3)} />
      <UpButton />
    </>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  try {
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

    return {
      props: {
        works: works?.data?.getWorks,
        work: work?.data,
        notFound: !work,
      },
    };
  } catch {
    return {
      props: {
        works: null,
        work: null,
        notFound: true,
      },
    };
  }
};
