
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ControlLineProviders } from './controlLine.providers';
import { DependenceService } from './dependence/dependence.service';
import { DependenceController} from './dependence/dependence.controller';
import { ControlLineController } from './controlLine.controller';
import { CompanyService } from './company/company.service'
import { CompanyController} from './company/company.controller'

@Module({
  imports: [DatabaseModule],
  components: [
    ...ControlLineProviders,
    DependenceService,
    CompanyService,
  ],
  controllers:[ControlLineController, DependenceController, CompanyController],
})
export class ControlLineModule {}