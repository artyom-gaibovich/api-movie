import {Type} from 'class-transformer';
import {IsArray, IsNumber, IsString, Max, Min, ValidateNested} from 'class-validator';

class MovieReviewDto {
	@IsString()
	review: string;
}

export class CreateMovieDto {
	@IsString()
	title: string;

	@IsNumber()
	year: number;

	@IsArray()
	@IsString({ each: true })
	genre: string[];

	@IsNumber()
	@Min(0)
	@Max(10)
	rating: number;

	@IsString()
	director: string;

	@IsArray()
	@IsString({ each: true })
	actors: string[];

	@IsString()
	plot: string;

	@IsString()
	poster: string;

	@IsString()
	trailer: string;

	@IsNumber()
	runtime: number;

	@IsString()
	awards: string;

	@IsString()
	country: string;

	@IsString()
	language: string;

	@IsString()
	boxOffice: string;

	@IsString()
	production: string;

	@IsString()
	website: string;

	@IsArray()
	@ValidateNested()
	@Type(() => MovieReviewDto)
	reviews: MovieReviewDto[];
}
