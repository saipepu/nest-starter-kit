import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: 'John', description: 'The name of the User' })
  @IsNotEmpty()
  @IsString()
  name: string;

  // email
  @ApiProperty({ example: 'John@gmail.com', description: 'The email of the User' })
  @IsNotEmpty()
  @IsString()
  email: string;

  // password
  @ApiProperty({ example: '123456', description: 'The password of the User' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

}
