"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSync1609185655578 = void 0;
class SchemaSync1609185655578 {
    constructor() {
        this.name = 'SchemaSync1609185655578';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`, undefined);
    }
}
exports.SchemaSync1609185655578 = SchemaSync1609185655578;
//# sourceMappingURL=1609185655578-SchemaSync.js.map