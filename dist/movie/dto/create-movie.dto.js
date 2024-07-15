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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class MovieCharacteristicDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MovieCharacteristicDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MovieCharacteristicDto.prototype, "value", void 0);
class CreateMovieDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "link", void 0);
__decorate([
    class_validator_1.Max(5),
    class_validator_1.Min(1),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "initialRating", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "price", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "oldPrice", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "credit", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "advantages", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "disAdvantages", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "categories", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "tags", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => MovieCharacteristicDto),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "characteristics", void 0);
exports.CreateMovieDto = CreateMovieDto;
//# sourceMappingURL=create-movie.dto.js.map