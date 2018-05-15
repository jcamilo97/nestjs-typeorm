import { Get, Post, Res, Body, HttpCode, Controller } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyservice: CompanyService,
  ) {}

  @Get()
  async findAll(@Res() res){
    res.send ( await this.companyservice.findAll());
  }
 
  @Post()
  async create(@Res() res, @Body() Body ){
    res.send( await this.companyservice.create(Body));
  }
}
