import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewField1735799531469 implements MigrationInterface {
    name = 'AddNewField1735799531469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "addNewField" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addNewField"`);
    }

}
