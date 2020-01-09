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
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Service: ResolverTypeWrapper<Service>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Client: ResolverTypeWrapper<Client>,
  Auth: ResolverTypeWrapper<Auth>,
  AService: ResolverTypeWrapper<AService>,
  ADoom: ResolverTypeWrapper<ADoom>,
  ALoad: ResolverTypeWrapper<ALoad>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
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
  ID: Scalars['ID'],
  Service: Service,
  Boolean: Scalars['Boolean'],
  Client: Client,
  Auth: Auth,
  AService: AService,
  ADoom: ADoom,
  ALoad: ALoad,
  Int: Scalars['Int'],
  Date: Scalars['Date'],
  DateTime: Scalars['DateTime'],
  Time: Scalars['Time'],
};

export type ADoomResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['ADoom'] = ResolversParentTypes['ADoom']> = {
  loads?: Resolver<Array<ResolversTypes['ALoad']>, ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  searchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type ALoadResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['ALoad'] = ResolversParentTypes['ALoad']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type AServiceResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['AService'] = ResolversParentTypes['AService']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dooms?: Resolver<Array<Array<ResolversTypes['ADoom']>>, ParentType, ContextType>,
};

export type AuthResolvers<ContextType = ClientContext, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
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
  __resolveType: TypeResolveFn<'AService', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time'
}

export type Resolvers<ContextType = ClientContext> = {
  ADoom?: ADoomResolvers<ContextType>,
  ALoad?: ALoadResolvers<ContextType>,
  AService?: AServiceResolvers<ContextType>,
  Auth?: AuthResolvers<ContextType>,
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
