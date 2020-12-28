import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SchemaSync1609185655578 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
