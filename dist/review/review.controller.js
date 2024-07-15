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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const ad_validation_pipe_1 = require("../pipes/ad-validation.pipe");
const create_review_dto_1 = require("./dto/create-review.dto");
const review_constants_1 = require("./review.constants");
const review_service_1 = require("./review.service");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async create(dto) {
        return this.reviewService.create(dto);
    }
    async notify(dto) {
        const message = `Имя: ${dto.name}\n`
            + `Заголовок: ${dto.title}\n`
            + `Описание: ${dto.description}\n`
            + `Рейтинг: ${dto.rating}\n`
            + `ID Фильма: ${dto.movieId}`;
    }
    async delete(id) {
        const deletedDoc = await this.reviewService.delete(id);
        if (!deletedDoc) {
            throw new common_1.HttpException(review_constants_1.REVIEW_NOT_FOUND, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getByMovie(movieId) {
        return this.reviewService.findByMovieId(movieId);
    }
};
__decorate([
    common_1.UsePipes(new common_1.ValidationPipe()),
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "create", null);
__decorate([
    common_1.UsePipes(new common_1.ValidationPipe()),
    common_1.Post('notify'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "notify", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', ad_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "delete", null);
__decorate([
    common_1.Get('byMovie/:movieId'),
    __param(0, common_1.Param('movieId', ad_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getByMovie", null);
ReviewController = __decorate([
    common_1.Controller('review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map