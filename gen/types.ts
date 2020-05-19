export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  field_meta?: Maybe<Field_Meta>;
  field_status?: Maybe<Field_Status>;
  field_comment?: Maybe<Array<Maybe<Field_Comment>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  insert_field_meta_one?: Maybe<Field_Meta>;
  insert_field_comment_one?: Maybe<Field_Comment>;
};


export type MutationInsert_Field_Meta_OneArgs = {
  test: Scalars['String'];
};


export type MutationInsert_Field_Comment_OneArgs = {
  comment: Scalars['String'];
};

export type Field_Meta = {
  __typename?: 'field_meta';
  id: Scalars['Int'];
  status: Scalars['String'];
};

export type Field_Comment = {
  __typename?: 'field_comment';
  id: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
};

export type Field_Status = {
  __typename?: 'field_status';
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};
