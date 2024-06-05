import { DataSource } from 'typeorm';
import { Cat } from './cat.entity';

export const catsProviders = [
	{
		provide: 'CATS_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Cat),
		inject: ['DATA_SOURCE'],
	},
];
