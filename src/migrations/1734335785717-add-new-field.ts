import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewField1734335785717 implements MigrationInterface {
  name = 'AddNewField1734335785717';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "newField" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "newField"`);
  }
}
