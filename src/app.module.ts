import { Module } from '@nestjs/common';
import { ControlLineModule } from './modules/control_line/controlLine.module'

@Module({
  imports: [ ControlLineModule ],
  components: [],
})
export class AppModule {}
