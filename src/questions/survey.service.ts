import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { QuestionsEntity } from './entities/questions.entity';
import { SurveyEntity } from './entities/survey.entity';
import {OrderRandomSql} from '../common/OrderRandom.enum'

@Injectable()
export class SurveyService {

    constructor(
        @InjectRepository(SurveyEntity)
        private readonly _surveyRepository: Repository<SurveyEntity>,
        @InjectRepository(QuestionsEntity)
        private readonly _questionsRepository: Repository<QuestionsEntity>
    ){}
    
    //opciones propias del servicio
    async getRandomSurvey(): Promise<any>{
    
    const randomSurvey = await this._surveyRepository
      .createQueryBuilder('survey')
      .leftJoinAndSelect("survey.questions", "questions")
      .select()
      .orderBy(OrderRandomSql.postgres_randomOrder)
      .getOne();
      
    


      return randomSurvey;
    }
    // 


    async createOne(texts: string[]){
        let newSurvey = this._surveyRepository.create();
        await this._surveyRepository.save(newSurvey);

        texts.map(async (text)=> {
            const newQuestion  = this._questionsRepository.create({text});
            newQuestion.survey = newSurvey;
            await this._questionsRepository.save(newQuestion);
        })
        return await this._surveyRepository.findOne({where: {id: newSurvey.id}})
    }



    async getAll(){
        return await this._surveyRepository.find();
    }
    updateOne(){}
    deleteOne(){}

}