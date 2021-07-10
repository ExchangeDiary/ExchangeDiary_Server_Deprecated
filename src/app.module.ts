import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import databaseOptions from './ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseOptions,
      synchronize: false,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
