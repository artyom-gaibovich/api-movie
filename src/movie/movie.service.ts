import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieModel } from './movie.model';
import { MOVIE_NOT_FOUND_ERROR } from './movie.constants';
import {FindMovieDto} from "./dto/find-movie.dto";

@Injectable()
export class MovieService {
	constructor(@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>) {}

	async create(dto: CreateMovieDto): Promise<MovieModel> {
		return this.movieModel.create(dto);
	}

	async findById(id: string): Promise<MovieModel | null> {
		return this.movieModel.findById(id).exec();
	}

	async deleteById(id: string): Promise<MovieModel | null> {
		return this.movieModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateMovieDto): Promise<MovieModel | null> {
		return this.movieModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async findWithReviews(dto: FindMovieDto): Promise<MovieModel[]> {
		return this.movieModel.find({ ...dto }).exec();
	}
}
