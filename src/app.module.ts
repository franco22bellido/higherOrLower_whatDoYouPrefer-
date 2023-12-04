import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsEntity } from './questions/entities/questions.entity';
import { SurveyEntity } from './questions/entities/survey.entity';
import { SurveyModule } from './questions/survey.module';
import { AnswerModule } from './answer/answer.module';
import { AnswersEntity } from './answer/entities/answers.entity';

@Module({
  imports: [ SurveyModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Ironman312345aAA',
    database: 'higher_or_lower',
    entities: [QuestionsEntity, SurveyEntity, AnswersEntity],
    synchronize: true,
  }),
  AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
