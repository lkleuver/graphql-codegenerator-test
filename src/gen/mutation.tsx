import * as Types from '../../gen/types';

import { FieldMetaFragment, FieldCommentFragment, FieldCommentFragment } from './fragments';
import gql from 'graphql-tag';
import { FieldMetaFragmentDoc, FieldCommentFragmentDoc, FieldCommentFragmentDoc } from './fragments';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type SetFieldStatusMutationVariables = {
  test: Types.Scalars['String'];
};


export type SetFieldStatusMutation = (
  { __typename?: 'Mutation' }
  & { insert_field_meta_one?: Types.Maybe<(
    { __typename?: 'field_meta' }
    & FieldMetaFragment
  )> }
);

export type AddFieldCommentMutationVariables = {
  comment: Types.Scalars['String'];
};


export type AddFieldCommentMutation = (
  { __typename?: 'Mutation' }
  & { insert_field_comment_one?: Types.Maybe<(
    { __typename?: 'field_comment' }
    & FieldCommentFragment
  )> }
);


export const SetFieldStatusDocument = gql`
    mutation SetFieldStatus($test: String!) {
  insert_field_meta_one(test: $test) {
    ...FieldMeta
  }
}
    ${FieldMetaFragmentDoc}`;
export type SetFieldStatusMutationFn = ApolloReactCommon.MutationFunction<SetFieldStatusMutation, SetFieldStatusMutationVariables>;
export type SetFieldStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetFieldStatusMutation, SetFieldStatusMutationVariables>, 'mutation'>;

    export const SetFieldStatusComponent = (props: SetFieldStatusComponentProps) => (
      <ApolloReactComponents.Mutation<SetFieldStatusMutation, SetFieldStatusMutationVariables> mutation={SetFieldStatusDocument} {...props} />
    );
    

/**
 * __useSetFieldStatusMutation__
 *
 * To run a mutation, you first call `useSetFieldStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFieldStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFieldStatusMutation, { data, loading, error }] = useSetFieldStatusMutation({
 *   variables: {
 *      test: // value for 'test'
 *   },
 * });
 */
export function useSetFieldStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetFieldStatusMutation, SetFieldStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<SetFieldStatusMutation, SetFieldStatusMutationVariables>(SetFieldStatusDocument, baseOptions);
      }
export type SetFieldStatusMutationHookResult = ReturnType<typeof useSetFieldStatusMutation>;
export type SetFieldStatusMutationResult = ApolloReactCommon.MutationResult<SetFieldStatusMutation>;
export type SetFieldStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<SetFieldStatusMutation, SetFieldStatusMutationVariables>;
export const AddFieldCommentDocument = gql`
    mutation AddFieldComment($comment: String!) {
  insert_field_comment_one(comment: $comment) {
    ...FieldComment
  }
}
    ${FieldCommentFragmentDoc}`;
export type AddFieldCommentMutationFn = ApolloReactCommon.MutationFunction<AddFieldCommentMutation, AddFieldCommentMutationVariables>;
export type AddFieldCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddFieldCommentMutation, AddFieldCommentMutationVariables>, 'mutation'>;

    export const AddFieldCommentComponent = (props: AddFieldCommentComponentProps) => (
      <ApolloReactComponents.Mutation<AddFieldCommentMutation, AddFieldCommentMutationVariables> mutation={AddFieldCommentDocument} {...props} />
    );
    

/**
 * __useAddFieldCommentMutation__
 *
 * To run a mutation, you first call `useAddFieldCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFieldCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFieldCommentMutation, { data, loading, error }] = useAddFieldCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddFieldCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFieldCommentMutation, AddFieldCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFieldCommentMutation, AddFieldCommentMutationVariables>(AddFieldCommentDocument, baseOptions);
      }
export type AddFieldCommentMutationHookResult = ReturnType<typeof useAddFieldCommentMutation>;
export type AddFieldCommentMutationResult = ApolloReactCommon.MutationResult<AddFieldCommentMutation>;
export type AddFieldCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFieldCommentMutation, AddFieldCommentMutationVariables>;