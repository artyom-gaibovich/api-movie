import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
export declare class ReviewService {
    private readonly reviewModel;
    constructor(reviewModel: ModelType<ReviewModel>);
    create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>>;
    delete(id: string): Promise<DocumentType<ReviewModel> | null>;
    findByMovieId(movieId: string): Promise<DocumentType<ReviewModel>[]>;
    deleteByMovieId(movieId: string): Promise<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }>;
}
