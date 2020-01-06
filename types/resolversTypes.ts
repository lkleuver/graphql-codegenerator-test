import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ClientContext } from './graphql/contexts/ClientContext';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ProductCheckInput: ProductCheckInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  ProductCheckResult: ResolverTypeWrapper<ProductCheckResult>,
  Product: ResolverTypeWrapper<Product>,
  Service: ResolverTypeWrapper<Service>,
  ServiceType: ServiceType,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Client: ResolverTypeWrapper<Client>,
  Auth: ResolverTypeWrapper<Auth>,
  SearchCriteriaInput: SearchCriteriaInput,
  AService: ResolverTypeWrapper<AService>,
  BService: ResolverTypeWrapper<BService>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Time: ResolverTypeWrapper<Scalars['Time']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ProductCheckInput: ProductCheckInput,
  String: Scalars['String'],
  ProductCheckResult: ProductCheckResult,
  Product: Product,
  Service: Service,
  ServiceType: ServiceType,
  Boolean: Scalars['Boolean'],
  Client: Client,
  Auth: Auth,
  SearchCriteriaInput: SearchCriteriaInput,
  AService: AService,
  BService: BService,
  Date: Scalars['Date'],
  DateTime: Scalars['DateTime'],
  Time: Scalars['Time'],
};

export type AServiceResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['AService'] = ResolversParentTypes['AService']> = {
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  someA?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['ServiceType'], ParentType, ContextType>,
};

export type AuthResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type BServiceResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['BService'] = ResolversParentTypes['BService']> = {
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  someB?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['ServiceType'], ParentType, ContextType>,
};

export type ClientResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  auth?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type ProductResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  rules?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  notes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  services?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>,
};

export type ProductCheckResultResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['ProductCheckResult'] = ResolversParentTypes['ProductCheckResult']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  check?: Resolver<ResolversTypes['ProductCheckResult'], ParentType, ContextType, RequireFields<QueryCheckArgs, 'product'>>,
  client?: Resolver<ResolversTypes['Client'], ParentType, ContextType>,
};

export type ServiceResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  __resolveType: TypeResolveFn<'AService' | 'BService', ParentType, ContextType>,
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['ServiceType'], ParentType, ContextType>,
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time'
}

export type Resolvers<ContextType = ClientContext> = {
  AService?: AServiceResolvers<ContextType>,
  Auth?: AuthResolvers<ContextType>,
  BService?: BServiceResolvers<ContextType>,
  Client?: ClientResolvers<ContextType>,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  Product?: ProductResolvers<ContextType>,
  ProductCheckResult?: ProductCheckResultResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Service?: ServiceResolvers,
  Time?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ClientContext> = Resolvers<ContextType>;
