import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  root() {}
  // root(@Res() res: Response) {
  //   return res.render(this.appService.getViewName(), {
  //     message: 'Hello world!',
  //   });
  // }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
