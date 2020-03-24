import { Resolver, ResolveField, Mutation, Args, Query } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../graphql.schema.generated';
import { UseGuards, UnauthorizedException } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { GqlUser, ResGql } from 'src/shared/decorators/decorators';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  // @Mutation()
  // @UseGuards(GqlAuthGuard)
  // deleteUser(@GqlUser() user: User) {
  //   return this.prisma.client.deleteUser({ id: user.id });
  // }

  @Query()
  @UseGuards(GqlAuthGuard)
  async me(@GqlUser() user: User) {
    if (!user) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    return user;
  }
}
