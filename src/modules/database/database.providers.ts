import { createConnection } from 'typeorm';
import { Company } from "../control_line/company/company.enity";
import { Dependence } from "../control_line/dependence/dependence.entity";
import { Edge } from "../control_line/edge/edge.entity";

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
               Company, Dependence, Edge
            ],
            synchronize: false,
        }),
    },
]