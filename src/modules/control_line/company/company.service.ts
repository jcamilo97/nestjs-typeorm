
import { Component, Inject } from '@nestjs/common';
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
    console.log("body", newCompany)
    return await this.CompanyRepository.createQueryBuilder()
      .insert()
      .into(Company)
      .values([newCompany]).execute()
      .then(response => { return  JSON.stringify(response) })
      .catch(err => {
        console.log("hay err",err)
        return err
      })
  }
  async updateCompany(comKey, companyItems) {
    return await this.CompanyRepository.createQueryBuilder()
      .update(Company)
      .set(companyItems)
      .where('com_id = :id', { id: comKey }).execute()
      .then(response => { return JSON.stringify(response) })
      .catch(err => { console.log(err) 
        return err.message })
  }
}