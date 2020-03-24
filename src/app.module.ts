import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLOptions } from './configs/graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphQLOptions,
    }),
    PrismaModule,
    AuthModule,
    PostModule,
    UserModule,
    QuestionsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
