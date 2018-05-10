
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DependenceProviders } from './dependence.providers';
import { DependenceService } from './dependence.service';
import { ControlLineController} from './controlLine.controller';

@Module({
  imports: [DatabaseModule],
  components: [
    ...DependenceProviders,
    DependenceService,
  ],
  controllers:[ControlLineController],
})
export class ControlLineModule {}