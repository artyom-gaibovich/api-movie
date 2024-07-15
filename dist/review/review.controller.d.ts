import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(dto: CreateReviewDto): Promise<import("@typegoose/typegoose").DocumentType<import("./review.model").ReviewModel>>;
    notify(dto: CreateReviewDto): Promise<void>;
    delete(id: string): Promise<void>;
    getByMovie(movieId: string): Promise<import("@typegoose/typegoose").DocumentType<import("./review.model").ReviewModel>[]>;
}
