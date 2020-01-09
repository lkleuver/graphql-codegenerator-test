export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  DateTime: any,
  Time: any,
};

export type ADoom = {
   __typename?: 'ADoom',
  loads: Array<ALoad>,
  code: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  searchCount?: Maybe<Scalars['Int']>,
};

export type ALoad = {
   __typename?: 'ALoad',
  code: Scalars['String'],
};

export type AService = Service & {
   __typename?: 'AService',
  id: Scalars['ID'],
  productId: Scalars['String'],
  dooms: Array<Array<ADoom>>,
};

export type Auth = {
   __typename?: 'Auth',
  accessToken: Scalars['String'],
};

export type Client = {
   __typename?: 'Client',
  auth?: Maybe<Auth>,
};



export type Product = {
   __typename?: 'Product',
  rules: Array<Scalars['String']>,
  id: Scalars['ID'],
  notes: Array<Scalars['String']>,
  services: Array<Service>,
};

export type ProductCheckInput = {
  searchId: Scalars['String'],
  searchProductId: Scalars['String'],
};

export type ProductCheckResult = {
   __typename?: 'ProductCheckResult',
  product?: Maybe<Product>,
  success: Scalars['Boolean'],
};

export type Query = {
   __typename?: 'Query',
  check: ProductCheckResult,
  client: Client,
};


export type QueryCheckArgs = {
  product: ProductCheckInput
};

export type Service = {
  id: Scalars['ID'],
  productId: Scalars['String'],
};

