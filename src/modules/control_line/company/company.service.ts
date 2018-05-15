
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './company.enity';
@Component()
export class CompanyService {
  constructor(
    @Inject('CompanyRepositoryToken') private readonly CompanyRepository: Repository<Company>) {}

  async findAll(): Promise<Company[]> {
    return await this.CompanyRepository.find();
  }

  async create(dependenceItem){
    let company = new Company()
 
    return await this.CompanyRepository.createQueryBuilder()
    .insert()
    .into(Company)
    .values([dependenceItem]).execute()
    .then(response => {return "insert succefull:"+ JSON.stringify(response)})
    .catch(err => {
      console.log(err)
      return err.message
    })
  }
}