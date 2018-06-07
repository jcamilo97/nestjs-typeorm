
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dependence } from './dependence.entity';

@Component()
export class DependenceService {
  constructor(
    @Inject('DependenceRepositoryToken') private readonly DependenceRepository: Repository<Dependence>) {}

  async findAll(): Promise<Dependence[]> {
    return await this.DependenceRepository.find();
  }

  async create(newDependence){
    return await this.DependenceRepository.createQueryBuilder()
    .insert()
    .into(Dependence)
    .values([newDependence]).execute()
    .then(res => {
       // TODO: Add some logic here
      return JSON.parse('{"message":"insert succefull"}')
    })
    .catch(err => {return err});
  }

  async updateDependence(depKey, dependenceItems) {
    let query:string = "UPDATE dependence SET";
    let iterator = Object.keys(dependenceItems);
    for (const key in dependenceItems) {    
      query += " "+key+`=$${iterator.indexOf(key)+1},`  
    }
    query = query.slice(0,-1)
    query += ` WHERE dependence.com_id ='${depKey}'`
    
    return await this.DependenceRepository.query(query, Object.values(dependenceItems))
      .then(response => { return '{"result":"update was success"}' })
      .catch(err => { return err.message })
  }
}