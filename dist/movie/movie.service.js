"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const review_model_1 = require("../review/review.model");
const movie_model_1 = require("./movie.model");
let MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async create(dto) {
        return this.movieModel.create(dto);
    }
    async findById(id) {
        return this.movieModel.findById(id).exec();
    }
    async deleteById(id) {
        return this.movieModel.findByIdAndDelete(id).exec();
    }
    async updateById(id, dto) {
        return this.movieModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findWithReviews(dto) {
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
        ]).exec();
    }
};
MovieService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(movie_model_1.MovieModel)),
    __metadata("design:paramtypes", [Object])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map