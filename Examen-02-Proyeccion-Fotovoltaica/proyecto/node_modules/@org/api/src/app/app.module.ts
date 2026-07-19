import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './solar/api-key.guard.js';
import { SolarController } from './solar/solar.controller.js';
import { SolarService } from './solar/solar.service.js';

@Module({
  imports: [],
  controllers: [SolarController],
  providers: [SolarService, ApiKeyGuard],
})
export class AppModule {}