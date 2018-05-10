
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dependence } from './entities/dependence.entity';

@Component()
export class DependenceService {
  constructor(
    @Inject('DependenceRepositoryToken') private readonly CompanyRepository: Repository<Dependence>) {}

  async findAll(): Promise<Dependence[]> {
    return await this.CompanyRepository.find();
  }
}