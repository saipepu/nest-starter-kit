import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {

  @ApiProperty({ example: 'John', description: 'The name of the User' })
  @IsOptional()
  @IsString()
  name: string;

}
