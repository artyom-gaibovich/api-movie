import { CreateMovieDto } from './dto/create-movie.dto';
import { FindMovieDto } from './dto/find-movie.dto';
import { MovieModel } from './movie.model';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(dto: CreateMovieDto): Promise<import("@typegoose/typegoose").DocumentType<MovieModel>>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<MovieModel>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: MovieModel): Promise<import("@typegoose/typegoose").DocumentType<MovieModel>>;
    find(dto: FindMovieDto): Promise<(MovieModel & {
        review: import("../review/review.model").ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
