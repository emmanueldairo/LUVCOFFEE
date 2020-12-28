"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSync1609185559448 = void 0;
class SchemaSync1609185559448 {
    constructor() {
        this.name = 'SchemaSync1609185559448';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "payload" json NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e1de41532ad6af403d3ceb4f2" ON "event" ("name", "type") `);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "recommendations" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "recommendations"`);
        await queryRunner.query(`DROP INDEX "IDX_6e1de41532ad6af403d3ceb4f2"`);
        await queryRunner.query(`DROP INDEX "IDX_b535fbe8ec6d832dde22065ebd"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }
}
exports.SchemaSync1609185559448 = SchemaSync1609185559448;
//# sourceMappingURL=1609185559448-SchemaSync.js.map