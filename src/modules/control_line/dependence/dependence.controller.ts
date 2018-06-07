import { Get, Post, Res, Param, Body, HttpCode, Controller, Patch } from '@nestjs/common';
import { DependenceService } from './dependence.service';
 
@Controller('dependence')
export class DependenceController {
  constructor(
    private readonly dependeceService: DependenceService,
  ) {}

 
  @Get()
  async findAll(@Res() res){
    res.send ( await this.dependeceService.findAll());
  }
  
  @Post()
  async create(@Body() body, @Res() res){
    res.send( await this.dependeceService.create(body));
  }

  @Patch('/:id')
  async update(@Res() res, @Body() updateDep, @Param('id') idDep){
    res.send( await this.dependeceService.updateDependence(idDep,updateDep));   
  }

}
