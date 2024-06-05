import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
	constructor(
		@Inject('CATS_REPOSITORY')
		private catsRepository: Repository<Cat>,
	) {}

	async findAll(): Promise<Cat[]> {
		return this.catsRepository.find();
	}
}
