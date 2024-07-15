import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from 'src/review/review.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FindMovieDto } from './dto/find-movie.dto';
import { MovieModel } from './movie.model';
export declare class MovieService {
    private readonly movieModel;
    constructor(movieModel: ModelType<MovieModel>);
    create(dto: CreateMovieDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<MovieModel>>;
    findById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<MovieModel> | null>;
    deleteById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<MovieModel> | null>;
    updateById(id: string, dto: CreateMovieDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<MovieModel> | null>;
    findWithReviews(dto: FindMovieDto): Promise<(MovieModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
