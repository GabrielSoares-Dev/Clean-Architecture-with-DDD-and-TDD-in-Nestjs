import { DatabaseModule } from '@infra'
import { Module } from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class InfraModule {}
