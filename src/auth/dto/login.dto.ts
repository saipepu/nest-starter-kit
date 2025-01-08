import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class loginDto {

  @ApiProperty({ example: 'John@gmail.com', description: 'email' })
  @IsNotEmpty()
  readonly email: string

  @ApiProperty({ example: '123456', description: 'password' })
  @IsNotEmpty()
  readonly password: string
}