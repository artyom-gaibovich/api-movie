import {Type} from 'class-transformer';
import {IsArray, IsEnum, IsString, ValidateNested} from 'class-validator';
import {TopLevelCategory} from '../top-page.model';



export class CreateTopPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;

	@IsString()
	alias: string;

	@IsString()
	title: string;

	@IsString()
	metaTitle: string;

	@IsString()
	metaDescription: string;

	@IsString()
	category: string;


	@IsString()
	seoText: string;



	@IsString()
	tagsTitle: string;



	@IsArray()
	@IsString({ each: true })
	tags: string[];
}