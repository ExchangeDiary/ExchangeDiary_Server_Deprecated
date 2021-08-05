import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import databaseOptions from './ormconfig'
import { MorganMiddleware } from './morgan.middleware'
import { DiaryModule } from './diary/diary.module'
import { UserRepository } from './user/user.repository'
import { VodaAuthMiddleware } from './auth/auth.middleware'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseOptions,
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([UserRepository]),
    UserModule,
    DiaryModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MorganMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
      .apply(VodaAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
