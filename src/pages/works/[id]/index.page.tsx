import { GetStaticProps } from 'next';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../../components';
import { client } from '../../../graphql/client';
import {
  GetResumeQuery,
  GetResumeQueryVariables,
  GetWorkQuery,
  GetWorkQueryVariables,
  GetWorksQuery,
  GetWorksQueryVariables,
  ResumeEntityResponse,
  WorkEntityResponse,
  WorkEntityResponseCollection,
} from '../../../graphql/generated/graphql';
import { GET_RESUME } from '../../../graphql/queries/getResume.qgl';
import { GET_WORK } from '../../../graphql/queries/getWork.gql';
import { GET_WORKS } from '../../../graphql/queries/getWorks.gql';
import { MainSection } from './MainSection/MainSection';
import { SimilarWorksSection } from './SimilarWorksSection/SimilarWorksSection';

type Props = {
  works: WorkEntityResponseCollection | null;
  work: WorkEntityResponse | null;
  notFound: boolean;
  resumeData: ResumeEntityResponse | null;
};

export default function Work({ works, work, notFound, resumeData }: Props) {
  if (notFound) {
    return <div>404</div>;
  }

  return (
    <>
      <Header />
      <MainSection work={work?.data} />
      <SimilarWorksSection works={works?.data?.slice(0, 3)} />
      <FormSection />
      <Footer
        resumeData={resumeData as ResumeEntityResponse}
        works={works?.data?.slice(0, 3)}
      />
      <UpButton />
    </>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  try {
    const works = await client.query<GetWorksQuery, GetWorksQueryVariables>({
      query: GET_WORKS,
      fetchPolicy: 'network-only',
      variables: {
        pagination: {
          start: 0,
          limit: 3,
        },
      },
    });

    const work = await client.query<GetWorkQuery, GetWorkQueryVariables>({
      query: GET_WORK,
      fetchPolicy: 'network-only',
      variables: {
        id: params?.id as string,
      },
    });

    if (work?.data?.work?.data === null) {
      return {
        props: {
          works: null,
          work: null,
          resumeData: null,
          notFound: true,
        },
      };
    }

    const resumeData = await client.query<
      GetResumeQuery,
      GetResumeQueryVariables
    >({
      query: GET_RESUME,
      fetchPolicy: 'network-only',
    });

    return {
      props: {
        works: works?.data?.works,
        work: work?.data.work,
        resumeData: resumeData?.data?.resume,
        notFound: !work,
      },
    };
  } catch {
    return {
      props: {
        works: null,
        work: null,
        resumeData: null,
        notFound: true,
      },
    };
  }
};
