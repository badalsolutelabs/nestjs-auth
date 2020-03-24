import { IsString, MaxLength, MinLength } from 'class-validator';
import { PostInput } from '../graphql.schema.generated';

export class PostInputDto extends PostInput {
  @IsString()
  @MinLength(10)
  @MaxLength(50)
  readonly title: string;
}
