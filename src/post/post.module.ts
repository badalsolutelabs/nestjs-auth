import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PostResolver],
  imports: [PrismaModule],
})
export class PostModule {}
