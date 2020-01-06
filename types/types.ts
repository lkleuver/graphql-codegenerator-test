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

export type AService = Service & {
   __typename?: 'AService',
  productId: Scalars['String'],
  someA: Scalars['String'],
  type: ServiceType,
};

export type Auth = {
   __typename?: 'Auth',
  accessToken: Scalars['String'],
};

export type BService = Service & {
   __typename?: 'BService',
  productId: Scalars['String'],
  someB: Scalars['String'],
  type: ServiceType,
};

export type Client = {
   __typename?: 'Client',
  auth?: Maybe<Auth>,
};



export type Product = {
   __typename?: 'Product',
  rules: Array<Scalars['String']>,
  notes: Array<Scalars['String']>,
  services: Array<Service>,
};

export type ProductCheckInput = {
  searchId: Scalars['String'],
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

export type SearchCriteriaInput = {
  destination: Scalars['String'],
};

export type Service = {
  productId: Scalars['String'],
  type: ServiceType,
};

export enum ServiceType {
  AService = 'A_SERVICE',
  BService = 'B_SERVICE'
}

