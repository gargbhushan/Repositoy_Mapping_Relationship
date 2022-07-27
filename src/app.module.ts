import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Question } from './modules/quiz/enitity/question.entity';
import { Quiz } from './modules/quiz/quiz.entity';
import { QuizModule } from './modules/quiz/quiz.module';


 

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"127.0.0.1",
      port:5432,
      username:"postgres",
      password:"password",
      database:"quiz",
      // entities:[__dirname+"/../*.entity{.ts,.js}"],
      entities:[Question,Quiz],
      autoLoadEntities: true,
      synchronize:true
  }),QuizModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
