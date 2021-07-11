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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MorganMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
