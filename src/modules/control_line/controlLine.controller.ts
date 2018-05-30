import { Get, Post, Res, Body, HttpCode, Controller } from '@nestjs/common';
import { dataMock } from './data.mock';

@Controller('control_line')
export class ControlLineController {
  constructor(
  ) {}
 
  @Get()
  async find(@Res() res){
    res.send (dataMock);
  }
  
}
