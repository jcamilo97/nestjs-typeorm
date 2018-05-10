import { createConnection } from 'typeorm';

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
                __dirname + '/../**/*.entity{.ts,.js}'
            ],
            synchronize: false,
        }),
    },
]