import { Controller, Get } from '@nestjs/common';

import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getData(): Promise<Message[]> {
    const d = Math.random();
    
    if (d > 0.95) {    
      this.appService.createData();
    }
    
    return this.appService.getData();
  }
}
