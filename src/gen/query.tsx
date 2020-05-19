import * as Types from '../../gen/types';

import { FieldMetaFragment, FieldCommentFragment, FieldCommentFragment } from './fragments';
import gql from 'graphql-tag';
import { FieldMetaFragmentDoc, FieldCommentFragmentDoc, FieldCommentFragmentDoc } from './fragments';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FieldMetaQueryVariables = {};


export type FieldMetaQuery = (
  { __typename?: 'Query' }
  & { field_meta?: Types.Maybe<(
    { __typename?: 'field_meta' }
    & FieldMetaFragment
  )> }
);

export type FieldStatusOptionsQueryVariables = {};


export type FieldStatusOptionsQuery = (
  { __typename?: 'Query' }
  & { field_status?: Types.Maybe<(
    { __typename: 'field_status' }
    & Pick<Types.Field_Status, 'value' | 'description'>
  )> }
);

export type FieldCommentsQueryVariables = {};


export type FieldCommentsQuery = (
  { __typename?: 'Query' }
  & { field_comment?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'field_comment' }
    & FieldCommentFragment
  )>>> }
);


export const FieldMetaDocument = gql`
    query FieldMeta {
  field_meta {
    ...FieldMeta
  }
}
    ${FieldMetaFragmentDoc}`;
export type FieldMetaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FieldMetaQuery, FieldMetaQueryVariables>, 'query'>;

    export const FieldMetaComponent = (props: FieldMetaComponentProps) => (
      <ApolloReactComponents.Query<FieldMetaQuery, FieldMetaQueryVariables> query={FieldMetaDocument} {...props} />
    );
    

/**
 * __useFieldMetaQuery__
 *
 * To run a query within a React component, call `useFieldMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldMetaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FieldMetaQuery, FieldMetaQueryVariables>) {
        return ApolloReactHooks.useQuery<FieldMetaQuery, FieldMetaQueryVariables>(FieldMetaDocument, baseOptions);
      }
export function useFieldMetaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FieldMetaQuery, FieldMetaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FieldMetaQuery, FieldMetaQueryVariables>(FieldMetaDocument, baseOptions);
        }
export type FieldMetaQueryHookResult = ReturnType<typeof useFieldMetaQuery>;
export type FieldMetaLazyQueryHookResult = ReturnType<typeof useFieldMetaLazyQuery>;
export type FieldMetaQueryResult = ApolloReactCommon.QueryResult<FieldMetaQuery, FieldMetaQueryVariables>;
export const FieldStatusOptionsDocument = gql`
    query FieldStatusOptions {
  field_status {
    __typename
    value
    description
  }
}
    `;
export type FieldStatusOptionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>, 'query'>;

    export const FieldStatusOptionsComponent = (props: FieldStatusOptionsComponentProps) => (
      <ApolloReactComponents.Query<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables> query={FieldStatusOptionsDocument} {...props} />
    );
    

/**
 * __useFieldStatusOptionsQuery__
 *
 * To run a query within a React component, call `useFieldStatusOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldStatusOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldStatusOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldStatusOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>) {
        return ApolloReactHooks.useQuery<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>(FieldStatusOptionsDocument, baseOptions);
      }
export function useFieldStatusOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>(FieldStatusOptionsDocument, baseOptions);
        }
export type FieldStatusOptionsQueryHookResult = ReturnType<typeof useFieldStatusOptionsQuery>;
export type FieldStatusOptionsLazyQueryHookResult = ReturnType<typeof useFieldStatusOptionsLazyQuery>;
export type FieldStatusOptionsQueryResult = ApolloReactCommon.QueryResult<FieldStatusOptionsQuery, FieldStatusOptionsQueryVariables>;
export const FieldCommentsDocument = gql`
    query FieldComments {
  field_comment {
    ...FieldComment
  }
}
    ${FieldCommentFragmentDoc}`;
export type FieldCommentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FieldCommentsQuery, FieldCommentsQueryVariables>, 'query'>;

    export const FieldCommentsComponent = (props: FieldCommentsComponentProps) => (
      <ApolloReactComponents.Query<FieldCommentsQuery, FieldCommentsQueryVariables> query={FieldCommentsDocument} {...props} />
    );
    

/**
 * __useFieldCommentsQuery__
 *
 * To run a query within a React component, call `useFieldCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldCommentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FieldCommentsQuery, FieldCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<FieldCommentsQuery, FieldCommentsQueryVariables>(FieldCommentsDocument, baseOptions);
      }
export function useFieldCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FieldCommentsQuery, FieldCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FieldCommentsQuery, FieldCommentsQueryVariables>(FieldCommentsDocument, baseOptions);
        }
export type FieldCommentsQueryHookResult = ReturnType<typeof useFieldCommentsQuery>;
export type FieldCommentsLazyQueryHookResult = ReturnType<typeof useFieldCommentsLazyQuery>;
export type FieldCommentsQueryResult = ApolloReactCommon.QueryResult<FieldCommentsQuery, FieldCommentsQueryVariables>;