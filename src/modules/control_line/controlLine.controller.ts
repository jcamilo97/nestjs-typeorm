import { Get, Res, Body, Controller } from '@nestjs/common';
import { DependenceService } from './dependence.service';

@Controller("dependences")
export class ControlLineController {
  constructor(
    private readonly dependeceservice: DependenceService,
  ) {}

  @Get()
  async findAll(@Res() res){
    res.send ( await this.dependeceservice.findAll());
  }

}
