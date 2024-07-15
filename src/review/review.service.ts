import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) { }

	async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByMovieId(movieId: string): Promise<DocumentType<ReviewModel>[]> {
		return this.reviewModel.find({ movieId: Types.ObjectId(movieId) }).exec();
	}

	async deleteByMovieId(movieId: string) {
		return this.reviewModel.deleteMany({ movieId: Types.ObjectId(movieId) }).exec();
	}
}
