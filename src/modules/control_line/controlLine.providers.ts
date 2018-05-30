
import { Connection, Repository } from 'typeorm';
import { Dependence } from './dependence/dependence.entity';
import { Company } from './company/company.enity';

export const ControlLineProviders = [
  {
    provide: 'DependenceRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Dependence),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'CompanyRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Company),
    inject: ['DbConnectionToken'],
  }
];