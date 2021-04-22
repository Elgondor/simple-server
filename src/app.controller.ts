import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth/google/')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req){
    return this.appService.googleLogin(req);
  }
}
