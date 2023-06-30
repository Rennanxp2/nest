import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDTO } from 'src/DTO/user.DTO';

@Controller('/user')
export class UserController {

    constructor(private userRepository: UserRepository) { }

    @Post()
    async create(@Body() user: UserDTO) {
        this.userRepository.saveUser(user);
        return user;
    }
    @Get()
    async fetch() {
        return this.userRepository.fetch();
    }
}