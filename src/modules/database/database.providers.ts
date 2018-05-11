import { createConnection } from 'typeorm';
import { Company } from "../control_line/company/company.enity";
import { Dependence } from "../control_line/dependence/dependence.entity";

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'root',
            database: 'Sgdea',
            entities: [
               Company, Dependence
            ],
            synchronize: false,
        }),
    },
]