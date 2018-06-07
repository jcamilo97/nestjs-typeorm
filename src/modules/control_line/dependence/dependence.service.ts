
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dependence } from './dependence.entity';

@Component()
export class DependenceService {
  constructor(
    @Inject('DependenceRepositoryToken') private readonly CompanyRepository: Repository<Dependence>) {}

  async findAll(): Promise<Dependence[]> {
    return await this.CompanyRepository.find();
  }

  async create(dependenceItem){
    return await this.CompanyRepository.createQueryBuilder()
    .insert()
    .into(Dependence)
    .values([dependenceItem]).execute()
    .then(res => {
       // TODO: Add some logic here
      return `{"message":"insert succefull"}`
    })
    .catch(err => {return err});
  }
}