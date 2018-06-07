
import { Component, Inject,  HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './company.enity';


@Component()
export class CompanyService {
  constructor(
    @Inject('CompanyRepositoryToken') private readonly CompanyRepository: Repository<Company>) { }

  async findAll(): Promise<Company[]> {
    return await this.CompanyRepository.find();
  }

  async createCompany(newCompany) {
    return await this.CompanyRepository.createQueryBuilder()
      .insert()
      .into(Company)
      .values([newCompany]).execute()
      .then(response => { return  JSON.stringify(response)})
      .catch(err => { return err})
  }

  async updateCompany(comKey, companyItems) {
    let query:string = "UPDATE company SET";
    let iterator = Object.keys(companyItems);
    for (const key in companyItems) {    
        query += " "+key+`=$${iterator.indexOf(key)+1},`  
    }
    query = query.slice(0,-1)
    query += ` WHERE company.com_id ='${comKey}' `
    
    return await this.CompanyRepository.query(query, Object.values(companyItems))
      .then(response => { return '{"result":"update was success"}' })
      .catch(err => { return err.message })
  }
}