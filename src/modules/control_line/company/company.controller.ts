import { Get, Post, Res, Body, HttpCode, Controller, Patch, Req, Param, HttpStatus } from '@nestjs/common';
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
  async create(@Res() res, @Body() createCom ){
    let response =  await this.companyservice.createCompany(createCom)
    res.status(HttpStatus.CREATED).send(response);
  }

//implement Etag ..development
  @Patch('/:id')
  async update(@Res() res, @Body() updateCom, @Param('id') com_id){
    res.status(HttpStatus.NO_CONTENT).json( await this.companyservice.updateCompany(com_id, updateCom)); 
  }
}
