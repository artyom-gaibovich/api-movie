import { IsNumber, IsString } from 'class-validator';

export class FindMovieDto {
	@IsString()
	category: string;

	@IsNumber()
	limit: number;
}