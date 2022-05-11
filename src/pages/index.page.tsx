import { GetServerSideProps } from 'next';

import { client } from '../graphql/client';
import {
  GetResumeQuery,
  GetResumeQueryVariables,
  GetWorksQuery,
  GetWorksQueryVariables,
  ResumeEntityResponse,
  WorkEntityResponseCollection,
} from '../graphql/generated/graphql';
import { GET_RESUME } from '../graphql/queries/getResume.qgl';
import { GET_WORKS } from '../graphql/queries/getWorks.gql';
import Home from './home/index.page';

type Props = {
  pageData: WorkEntityResponseCollection;
  resumeData: ResumeEntityResponse;
};

export default function Index({ pageData, resumeData }: Props) {
  return <Home resumeData={resumeData} pageData={pageData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    fetchPolicy: 'network-only',
    variables: {
      pagination: {
        limit: 3,
        start: 0,
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
      pageData: pageData?.data.works,
      resumeData: resumeData?.data?.resume,
    },
  };
};
