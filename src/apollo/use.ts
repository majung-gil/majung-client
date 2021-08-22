import { useLazyQuery, useQuery } from '@apollo/client';
import { SELECT_CAFE_LIST } from './query';

export default function useCafeList() {
  const [data] = useLazyQuery(SELECT_CAFE_LIST, {
    fetchPolicy: 'no-cache',
  });
  return data;
}
