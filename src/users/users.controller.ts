import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Post('create')
    async create(@Body() dto: { username: string, password: string }) {
        return await this.usersService.create(dto);
    }

    @Get()
    async getOne(@Param('id') id: string) {
        return await this.usersService.findOne(id)
    }

}
