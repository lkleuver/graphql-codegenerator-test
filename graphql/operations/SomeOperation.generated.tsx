import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type SomeOperationQueryVariables = {
  product: Types.ProductCheckInput
};


export type SomeOperationQuery = (
  { __typename?: 'Query' }
  & { check: (
    { __typename?: 'ProductCheckResult' }
    & Pick<Types.ProductCheckResult, 'success'>
    & { product: Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'notes' | 'rules'>
      & { services: Array<(
        { __typename?: 'AService' }
        & Pick<Types.AService, 'someA'>
      ) | { __typename?: 'BService' }> }
    )> }
  ) }
);


export const SomeOperationDocument = gql`
    query SomeOperation($product: ProductCheckInput!) {
  check(product: $product) {
    success
    product {
      services {
        ... on AService {
          someA
        }
      }
      notes
      rules
    }
  }
}
    `;
export type SomeOperationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SomeOperationQuery, SomeOperationQueryVariables>, 'query'> & ({ variables: SomeOperationQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SomeOperationComponent = (props: SomeOperationComponentProps) => (
      <ApolloReactComponents.Query<SomeOperationQuery, SomeOperationQueryVariables> query={SomeOperationDocument} {...props} />
    );
    

/**
 * __useSomeOperationQuery__
 *
 * To run a query within a React component, call `useSomeOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSomeOperationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSomeOperationQuery({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useSomeOperationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SomeOperationQuery, SomeOperationQueryVariables>) {
        return ApolloReactHooks.useQuery<SomeOperationQuery, SomeOperationQueryVariables>(SomeOperationDocument, baseOptions);
      }
export function useSomeOperationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SomeOperationQuery, SomeOperationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SomeOperationQuery, SomeOperationQueryVariables>(SomeOperationDocument, baseOptions);
        }
export type SomeOperationQueryHookResult = ReturnType<typeof useSomeOperationQuery>;
export type SomeOperationLazyQueryHookResult = ReturnType<typeof useSomeOperationLazyQuery>;
export type SomeOperationQueryResult = ApolloReactCommon.QueryResult<SomeOperationQuery, SomeOperationQueryVariables>;