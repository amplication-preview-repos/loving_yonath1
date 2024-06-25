/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Property } from "./Property";
import { PropertyCountArgs } from "./PropertyCountArgs";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyFindUniqueArgs } from "./PropertyFindUniqueArgs";
import { DeletePropertyArgs } from "./DeletePropertyArgs";
import { PropertyService } from "../property.service";
@graphql.Resolver(() => Property)
export class PropertyResolverBase {
  constructor(protected readonly service: PropertyService) {}

  async _propertiesMeta(
    @graphql.Args() args: PropertyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Property])
  async properties(
    @graphql.Args() args: PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.service.properties(args);
  }

  @graphql.Query(() => Property, { nullable: true })
  async property(
    @graphql.Args() args: PropertyFindUniqueArgs
  ): Promise<Property | null> {
    const result = await this.service.property(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Property)
  async deleteProperty(
    @graphql.Args() args: DeletePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
