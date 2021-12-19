import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [GamesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
