import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../../generated/prisma-client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate({ id }): Promise<User> {
    const user = await this.prisma.client.user({ id });

    if (!user) {
      throw new UnauthorizedException('Authantication Failed');
    }

    return user;
  }
}
