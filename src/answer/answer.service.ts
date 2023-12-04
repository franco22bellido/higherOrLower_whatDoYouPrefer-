import { Injectable } from '@nestjs/common';
import {InjectRepository, } from '@nestjs/typeorm'
import { AnswersEntity } from './entities/answers.entity';
import {Repository} from 'typeorm'
import { SurveyEntity } from 'src/questions/entities/survey.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class AnswerService {

    constructor(
        @InjectRepository(AnswersEntity)
        private readonly _answerRepository : Repository<AnswersEntity>,
        @InjectRepository(SurveyEntity)
        private readonly _surveyRepository : Repository<SurveyEntity>
    ){}

    async voteSurvey (optionSelected: number ,surveyId: number): Promise<AnswersEntity>{
        const answer = this._answerRepository.create({votedOption: optionSelected,surveyId});
        return await this._answerRepository.save(answer);
    }

    async getTotalCountsVotes(surveyId: number ){
        const surveyFound = await this._surveyRepository.findOne({where: {id: surveyId}});
        if(!surveyFound){
            throw new NotFoundException("survey not found");
        }
        const option1 : number = await this._answerRepository.count({where: {surveyId, votedOption: 1}});
        const option2 : number= await this._answerRepository.count({where: {surveyId, votedOption: 2}});

        return {
            surveyFound,
            "votes for option 1": option1,
            "votes for option 2": option2
        }
    }

}