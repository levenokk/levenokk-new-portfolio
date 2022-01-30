import * as GENERATED from '../../graphql/generated/graphql';

export const useGetWorksQuery = () => {
  return GENERATED.useGetWorksQuery({
    ssr: true,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    variables: {
      offset: 0,
      limit: 9,
    },
  });
};
