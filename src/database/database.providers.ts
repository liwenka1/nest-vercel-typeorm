import { DataSource } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'postgres',
				host: 'aws-0-ap-southeast-1.pooler.supabase.com',
				port: 5432,
				username: 'postgres.vaeesrjlsrdinuqeylfy',
				password: 'QL1XcyZV4XIn645k',
				database: 'postgres',
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];
