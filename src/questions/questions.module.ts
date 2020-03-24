import { Module } from '@nestjs/common';
import { QuestionsResolver } from './questions.resolver';

@Module({
  providers: [QuestionsResolver]
})
export class QuestionsModule {}
