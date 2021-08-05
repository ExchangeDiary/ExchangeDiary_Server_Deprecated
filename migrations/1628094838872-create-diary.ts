import { MigrationInterface, QueryRunner } from 'typeorm'

export class createDiary1628094838872 implements MigrationInterface {
  name = 'createDiary1628094838872'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `diary` (`id` varchar(36) NOT NULL, `theme` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `interval` int NOT NULL, `invitation_code` varchar(255) NOT NULL, `invitation_code_hint` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'ALTER TABLE `user` ADD `profile_image_url` varchar(255) NULL',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user` DROP COLUMN `profile_image_url`',
    )
    await queryRunner.query('DROP TABLE `diary`')
  }
}
