"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1609181711062 = void 0;
class CoffeeRefactor1609181711062 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1609181711062 = CoffeeRefactor1609181711062;
//# sourceMappingURL=1609181711062-CoffeeRefactor.js.map