
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DependenceProviders } from './dependence.providers';
import { DependenceService } from './dependence.service';
import { DependenceController} from './dependence.controller';
import { CompanyService } from './company/company.service'

@Module({
  imports: [DatabaseModule],
  components: [
    ...DependenceProviders,
    DependenceService,
    CompanyService,
  ],
  controllers:[DependenceController],
})
export class ControlLineModule {}