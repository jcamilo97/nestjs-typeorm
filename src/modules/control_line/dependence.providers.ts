
import { Connection, Repository } from 'typeorm';
import { Dependence } from './entities/dependence.entity';

export const DependenceProviders = [
  {
    provide: 'DependenceRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Dependence),
    inject: ['DbConnectionToken'],
  },
];