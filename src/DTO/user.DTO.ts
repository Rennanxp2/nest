import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class UserDTO {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string
}