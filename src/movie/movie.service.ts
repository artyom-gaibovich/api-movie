import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ReviewModel } from 'src/review/review.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FindMovieDto } from './dto/find-movie.dto';
import {MovieModel} from './movie.model';

@Injectable()
export class MovieService {
	constructor(@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>) { }

	async create(dto: CreateMovieDto) {
		return this.movieModel.create(dto);
	}

	async findById(id: string) {
		return this.movieModel.findById(id).exec();
	}

	async deleteById(id: string) {
		return this.movieModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateMovieDto) {
		return this.movieModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async findWithReviews(dto: FindMovieDto) {
		return this.movieModel.aggregate([
			{
				$match: {
					categories: dto.category
				}
			},
			{
				$sort: {
					_id: 1
				}
			},
			{
				$limit: dto.limit
			},
			{
				$lookup: {
					from: 'Review',
					localField: '_id',
					foreignField: 'movieId',
					as: 'reviews'
				}
			},
			{
				$addFields: {
					reviewCount: { $size: '$reviews' },
					reviewAvg: { $avg: '$reviews.rating' },
					reviews: {
						$function: {
							body: `function (reviews) {
								reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
								return reviews;
							}`,
							args: ['$reviews'],
							lang: 'js'
						}
					}
				}
			}
		]).exec() as (MovieModel & { review: ReviewModel[], reviewCount: number, reviewAvg: number })[];
	}
}
