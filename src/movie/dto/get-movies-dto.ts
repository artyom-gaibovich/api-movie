import { IsNumber, IsOptional, Min } from 'class-validator';

export class GetMoviesDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	limit?: number;


	@IsOptional()
	@IsNumber()
	@Min(1)
	page?: number;
}
