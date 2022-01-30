import Head from 'next/head';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../components';
import { client } from '../../graphql/client';
import {
  GetWorksQuery,
  GetWorksQueryVariables,
  Works as StaticPageType,
} from '../../graphql/generated/graphql';
import { GET_WORKS } from '../../graphql/queries/getWorks.gql';
import { MainSection } from './MainSection/MainSection';

type Props = {
  pageData: StaticPageType;
};

export default function Works({ pageData }: Props) {
  return (
    <>
      <Head>
        <title>Максим Строило - web разработчик | работы</title>
      </Head>
      <Header />
      <MainSection />
      <FormSection isBackground />
      <Footer works={pageData?.rows.slice(0, 3)} />
      <UpButton />
    </>
  );
}

export async function getServerSideProps() {
  const pageData = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    variables: {
      offset: 0,
      limit: 9,
    },
  });

  return {
    props: {
      pageData: pageData?.data.getWorks,
    },
  };
}
