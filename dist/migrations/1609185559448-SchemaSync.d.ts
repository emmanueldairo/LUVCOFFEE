import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SchemaSync1609185559448 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
