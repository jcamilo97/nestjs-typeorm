import { Get, Post, Res, Body, HttpCode, Controller, Patch, Req, Param } from '@nestjs/common';
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
    res.send( await this.companyservice.createCompany(Body));
  }

  @Patch('/:id')
  async update(@Res() res, @Body() body, @Param('id') com_id){
    res.send( await this.companyservice.updateCompany(com_id, body)); 
  }
}
