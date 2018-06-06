
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Edge } from './edge.entity';

@Component()
export class EdgeService {
  constructor(
    @Inject('EdgeRepositoryToken') private readonly CompanyRepository: Repository<Edge>) { }

  async findAll(): Promise<Edge[]> {
    return await this.CompanyRepository.find();
  }

  async createEdge(newEdge) {
    console.log("body", newEdge)
    return await this.CompanyRepository.createQueryBuilder()
      .insert()
      .into(Edge)
      .values([newEdge]).execute()
      .then(response => { return  JSON.stringify(response) })
      .catch(err => {
        console.log("hay err",err)
        return err
      })
  }
}

