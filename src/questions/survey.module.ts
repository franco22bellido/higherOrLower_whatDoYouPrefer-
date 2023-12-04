import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { QuestionsEntity } from './entities/questions.entity';
import { SurveyEntity } from './entities/survey.entity';

@Module({
  providers: [SurveyService],
  imports: [TypeOrmModule.forFeature([SurveyEntity, QuestionsEntity])],
  controllers: [SurveyController]
})
export class SurveyModule {}
