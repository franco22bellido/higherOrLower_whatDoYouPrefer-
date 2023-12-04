import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { SurveyEntity } from 'src/questions/entities/survey.entity';
import { AnswersEntity } from './entities/answers.entity';
import { AnswerService } from './answer.service';

@Module({
  providers: [AnswerService],
  imports: [TypeOrmModule.forFeature([AnswersEntity, SurveyEntity])],
  controllers: [AnswerController]
})
export class AnswerModule {}
