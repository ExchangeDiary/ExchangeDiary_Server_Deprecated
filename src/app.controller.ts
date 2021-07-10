import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/health')
  getHealth(): { health: boolean } {
    return { health: true }
  }
}
