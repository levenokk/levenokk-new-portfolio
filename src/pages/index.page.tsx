import { client } from '../graphql/client';
import {
  GetWorksQuery,
  GetWorksQueryVariables,
  Works as StaticPageType,
} from '../graphql/generated/graphql';
import { GET_WORKS } from '../graphql/queries/getWorks.gql';
import Home from './home/index.page';

type Props = {
  pageData: StaticPageType;
};

export default function Index({ pageData }: Props) {
  return <Home pageData={pageData} />;
}

export async function getServerSideProps() {
  const pageData = await client.query<GetWorksQuery, GetWorksQueryVariables>({
    query: GET_WORKS,
    variables: {
      offset: 0,
      limit: 3,
    },
  });

  return {
    props: {
      pageData: pageData?.data.getWorks,
    },
  };
}
