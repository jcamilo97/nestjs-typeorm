import { Get, Post, Res, Body, HttpCode, Controller } from '@nestjs/common';
import { DependenceService } from './dependence/dependence.service';

@Controller('dependence')
export class DependenceController {
  constructor(
    private readonly dependeceservice: DependenceService,
  ) {}

  @Get()
  async findAll(@Res() res){
    res.send ( await this.dependeceservice.findAll());
  }
  @HttpCode(200)
  @Post()
  async create(@Body() body, @Res() res){
    res.send( await this.dependeceservice.create(body));
  }
}
