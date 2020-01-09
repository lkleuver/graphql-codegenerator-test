import * as Types from '../../../types/types';

import gql from 'graphql-tag';

export type AServiceFragmentFragment = (
  { __typename?: 'AService' }
  & Pick<Types.AService, 'id' | 'productId'>
);

export const AServiceFragmentFragmentDoc = gql`
    fragment AServiceFragment on AService {
  id
  productId
}
    `;