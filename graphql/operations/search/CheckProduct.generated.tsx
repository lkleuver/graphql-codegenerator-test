import * as Types from '../../../types/types';

import { AServiceFragmentFragment } from './AServiceFragment.generated';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CheckProductQueryVariables = {
  product: Types.ProductCheckInput
};


export type CheckProductQuery = (
  { __typename?: 'Query' }
  & { check: (
    { __typename?: 'ProductCheckResult' }
    & Pick<Types.ProductCheckResult, 'success'>
    & { product: Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'notes' | 'rules'>
      & { services: Array<(
        { __typename?: 'AService' }
        & { dooms: Array<Array<(
          { __typename?: 'ADoom' }
          & Pick<Types.ADoom, 'code'>
          & { loads: Array<(
            { __typename?: 'ALoad' }
            & Pick<Types.ALoad, 'code'>
          )> }
        )>> }
        & AServiceFragmentFragment
      )> }
    )> }
  ) }
);


export const CheckProductDocument = gql`
    query CheckProduct($product: ProductCheckInput!) {
  check(product: $product) {
    success
    product {
      notes
      rules
      services {
        ...AServiceFragment
        ... on AService {
          dooms {
            code
            loads {
              code
            }
          }
        }
      }
    }
  }
}
    ${AServiceFragmentFragmentDoc}`;
export type CheckProductComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CheckProductQuery, CheckProductQueryVariables>, 'query'> & ({ variables: CheckProductQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CheckProductComponent = (props: CheckProductComponentProps) => (
      <ApolloReactComponents.Query<CheckProductQuery, CheckProductQueryVariables> query={CheckProductDocument} {...props} />
    );
    

/**
 * __useCheckProductQuery__
 *
 * To run a query within a React component, call `useCheckProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckProductQuery({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useCheckProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CheckProductQuery, CheckProductQueryVariables>) {
        return ApolloReactHooks.useQuery<CheckProductQuery, CheckProductQueryVariables>(CheckProductDocument, baseOptions);
      }
export function useCheckProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CheckProductQuery, CheckProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CheckProductQuery, CheckProductQueryVariables>(CheckProductDocument, baseOptions);
        }
export type CheckProductQueryHookResult = ReturnType<typeof useCheckProductQuery>;
export type CheckProductLazyQueryHookResult = ReturnType<typeof useCheckProductLazyQuery>;
export type CheckProductQueryResult = ApolloReactCommon.QueryResult<CheckProductQuery, CheckProductQueryVariables>;