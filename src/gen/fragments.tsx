import * as Types from '../../gen/types';

import gql from 'graphql-tag';

export type FieldMetaFragment = (
  { __typename: 'field_meta' }
  & Pick<Types.Field_Meta, 'id' | 'status'>
);

export type FieldCommentFragment = (
  { __typename: 'field_comment' }
  & Pick<Types.Field_Comment, 'id' | 'comment'>
);

export const FieldMetaFragmentDoc = gql`
    fragment FieldMeta on field_meta {
  __typename
  id
  status
}
    `;
export const FieldCommentFragmentDoc = gql`
    fragment FieldComment on field_comment {
  __typename
  id
  comment
}
    `;