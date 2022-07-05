/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Message: { // root type
    content: string; // String!
    id: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    description: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Query: {};
  Skill: { // root type
    id: number; // Int!
    name: string; // String!
  }
  User: { // root type
    bio: string; // String!
    githubId: string; // String!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Message: { // field return type
    content: string; // String!
    id: number; // Int!
  }
  Mutation: { // field return type
    post: NexusGenRootTypes['Post']; // Post!
  }
  Post: { // field return type
    description: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
  }
  Skill: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  User: { // field return type
    bio: string; // String!
    githubId: string; // String!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Message: { // field return type name
    content: 'String'
    id: 'Int'
  }
  Mutation: { // field return type name
    post: 'Post'
  }
  Post: { // field return type name
    description: 'String'
    id: 'Int'
    title: 'String'
  }
  Query: { // field return type name
    feed: 'Post'
  }
  Skill: { // field return type name
    id: 'Int'
    name: 'String'
  }
  User: { // field return type name
    bio: 'String'
    githubId: 'String'
    id: 'Int'
    matchingPoint: 'Int'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    post: { // args
      description: string; // String!
      title: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}