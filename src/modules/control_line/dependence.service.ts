
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dependence } from './entities/dependence.entity';
import { resolve } from 'dns';

@Component()
export class DependenceService {
  constructor(
    @Inject('DependenceRepositoryToken') private readonly CompanyRepository: Repository<Dependence>) {}

  async findAll(): Promise<Dependence[]> {
    return await this.CompanyRepository.find();
  }

  async create(dependenceItem){
    let dependence = new Dependence()
    dependence.depname = dependenceItem.name;
    dependence.dep_type = dependenceItem.type;
    dependence.companycomid = dependenceItem.companyid;
    return await this.CompanyRepository.save(dependence)
    .then(res => {
       // TODO: Add some logic here
      "susccefull"
    })
    .catch(err => console.log(err));
  }
}