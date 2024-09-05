import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalsCrudModule } from './medicals-crud/medicals-crud.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'não irei divulgar minha url do cluster do mongo aqui, mas você deve inserir a mesma aqui',
    ),
    MedicalsCrudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
