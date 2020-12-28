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
exports.Flavour = void 0;
const typeorm_1 = require("typeorm");
const coffee_entity_1 = require("./coffee.entity");
let Flavour = class Flavour {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Flavour.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Flavour.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => coffee_entity_1.Coffee, coffee => coffee.flavors),
    __metadata("design:type", Array)
], Flavour.prototype, "coffees", void 0);
Flavour = __decorate([
    typeorm_1.Entity()
], Flavour);
exports.Flavour = Flavour;
//# sourceMappingURL=flavour.entity.js.map