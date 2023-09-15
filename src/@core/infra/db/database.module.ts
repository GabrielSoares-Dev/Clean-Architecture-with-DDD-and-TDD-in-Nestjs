import { Module } from '@nestjs/common'
import { DynamodbModule } from '@infra'

@Module({
  imports: [DynamodbModule],
})
export class DatabaseModule {}
