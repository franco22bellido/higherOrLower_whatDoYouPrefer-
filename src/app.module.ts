import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsEntity } from './questions/entities/questions.entity';
import { SurveyEntity } from './questions/entities/survey.entity';
import { SurveyModule } from './questions/survey.module';
import { AnswerModule } from './answer/answer.module';
import { AnswersEntity } from './answer/entities/answers.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ SurveyModule,
  ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (_configService: ConfigService)=> ({
        type: 'mysql',
        host: _configService.get<string>('DB_HOST') || 'localhost',
        port: parseInt(_configService.get<string>('DB_PORT')) || 3306,
        username: _configService.get<string>('DB_USERNAME') ||'root',
        password: _configService.get<string>('DB_PASSWORD')||'Ironman312345aAA',
        database: _configService.get<string>('DB_NAME') || 'higher_or_lower',
        entities: [QuestionsEntity, SurveyEntity, AnswersEntity],
        synchronize: true,

    })
  })
  ,
  AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
