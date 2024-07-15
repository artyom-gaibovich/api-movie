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
exports.MovieModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class MovieCharacteristic {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieCharacteristic.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieCharacteristic.prototype, "value", void 0);
class MovieModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "image", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "link", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], MovieModel.prototype, "initialRating", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], MovieModel.prototype, "price", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], MovieModel.prototype, "oldPrice", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], MovieModel.prototype, "credit", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "description", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "advantages", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], MovieModel.prototype, "disAdvantages", void 0);
__decorate([
    typegoose_1.prop({ type: () => [String] }),
    __metadata("design:type", Array)
], MovieModel.prototype, "categories", void 0);
__decorate([
    typegoose_1.prop({ type: () => [String] }),
    __metadata("design:type", Array)
], MovieModel.prototype, "tags", void 0);
__decorate([
    typegoose_1.prop({ type: () => [MovieCharacteristic], _id: false }),
    __metadata("design:type", Array)
], MovieModel.prototype, "characteristics", void 0);
exports.MovieModel = MovieModel;
//# sourceMappingURL=movie.model.js.map