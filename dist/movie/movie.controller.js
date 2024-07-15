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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const ad_validation_pipe_1 = require("../pipes/ad-validation.pipe");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const find_movie_dto_1 = require("./dto/find-movie.dto");
const movie_constants_1 = require("./movie.constants");
const movie_model_1 = require("./movie.model");
const movie_service_1 = require("./movie.service");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async create(dto) {
        return this.movieService.create(dto);
    }
    async get(id) {
        const movie = await this.movieService.findById(id);
        if (!movie) {
            throw new common_1.NotFoundException(movie_constants_1.MOVIE_NOT_FOUND_ERROR);
        }
        return movie;
    }
    async delete(id) {
        const deletedMovie = await this.movieService.deleteById(id);
        if (!deletedMovie) {
            throw new common_1.NotFoundException(movie_constants_1.MOVIE_NOT_FOUND_ERROR);
        }
    }
    async patch(id, dto) {
        const updatedMovie = await this.movieService.updateById(id, dto);
        if (!updatedMovie) {
            throw new common_1.NotFoundException(movie_constants_1.MOVIE_NOT_FOUND_ERROR);
        }
        return updatedMovie;
    }
    async find(dto) {
        return this.movieService.findWithReviews(dto);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', ad_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "get", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', ad_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "delete", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id', ad_validation_pipe_1.IdValidationPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movie_model_1.MovieModel]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "patch", null);
__decorate([
    common_1.UsePipes(new common_1.ValidationPipe()),
    common_1.HttpCode(200),
    common_1.Post('find'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_movie_dto_1.FindMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "find", null);
MovieController = __decorate([
    common_1.Controller('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map