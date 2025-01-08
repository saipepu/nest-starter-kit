import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class User extends Document {
  @ApiProperty({ example: 'John', description: 'The name of the User' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'John@gmail.com', description: 'The email of the User' })
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  hashedPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
