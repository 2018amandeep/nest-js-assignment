import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/loacal-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}


// src/auth/auth.controller.ts
// import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() loginDto: { username: string; password: string; recaptchaToken: string }) {
//     const user = await this.authService.validateUser(
//       loginDto.username,
//       loginDto.password,
//       loginDto.recaptchaToken,
//     );
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return this.authService.login(user);
//   }
// }
