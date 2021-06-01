import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class UserDto {
  @IsNumber()
  @IsNotEmpty()
  uid: number;

  @IsString()
  @IsNotEmpty()
  birthdate: string;
  /*   @IsString()
  @IsNotEmpty()
  taxID: string; */
}