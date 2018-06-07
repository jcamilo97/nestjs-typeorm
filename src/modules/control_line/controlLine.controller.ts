import { Get, Post, Res, Body, HttpCode, Controller } from '@nestjs/common';
import { EdgeService } from './edge/edge.services';
import { dataMock } from './data.mock';


@Controller('control_line')
export class ControlLineController {
  constructor(
    private readonly edgeservice:EdgeService
  ) {}
 
  @Get()
  async getControlLine(@Res() res){
    res.send (dataMock);
  }

  @Post('/edge')
  async createEdge(@Res() res, @Body() body){
    res.send( await this.edgeservice.createEdge(body))
  }
  
}
