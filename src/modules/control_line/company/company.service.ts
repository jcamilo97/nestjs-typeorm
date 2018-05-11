
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './company.enity'

@Component()
export class CompanyService {
  constructor(
    @Inject('CompanyRepositoryToken') private readonly CompanyRepository: Repository<Company>) {}

  async findAll(): Promise<Company[]> {
    return await this.CompanyRepository.find();
  }
}