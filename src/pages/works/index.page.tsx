import Head from 'next/head';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../components';
import { client } from '../../graphql/client';
import {
  GetResumeQuery,
  GetResumeQueryVariables,
  GetWorksQuery,
  GetWorksQueryVariables,
  ResumeEntityResponse,
  WorkEntityResponseCollection,
} from '../../graphql/generated/graphql';
import { GET_RESUME } from '../../graphql/queries/getResume.qgl';
import { GET_WORKS } from '../../graphql/queries/getWorks.gql';
import { MainSection } from './MainSection/MainSection';

type Props = {
  pageData: WorkEntityResponseCollection;
  resumeData: ResumeEntityResponse;
};

export default function Works({ pageData, resumeData }: Props) {
  return (
    <>
      <Head>
        <title>Максим Строило - web разработчик | работы</title>
      </Head>
      <Header />
      <MainSection works={pageData?.data} />
      <FormSection isBackground />
      <Footer resumeData={resumeData} works={pageData?.data.slice(0, 3)} />
      <UpButton />
    </>
  );
}

export async function getServerSideProps() {
  const pageData = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    variables: {
      pagination: {
        start: 0,
        limit: 9,
      },
    },
  });

  const resumeData = await client.query<
    GetResumeQuery,
    GetResumeQueryVariables
  >({
    query: GET_RESUME,
    fetchPolicy: 'network-only',
  });

  return {
    props: {
      pageData: pageData?.data?.works,
      resumeData: resumeData?.data?.resume,
    },
  };
}
