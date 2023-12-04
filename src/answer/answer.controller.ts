import { Controller, Post, Param, Body, Get} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {

    constructor(
        private readonly _answerService: AnswerService
    ){}
    
    @Post("/:surveyId")
    async answerSurvey(@Param("surveyId", ParseIntPipe) surveyId: number,
         @Body("optionSelected", ParseIntPipe) optionSelected: number){
        return await this._answerService.voteSurvey(optionSelected , surveyId);
    }
    
    @Get("/:surveyId")
    async getTotalCounts(
        @Param("surveyId", ParseIntPipe) surveyId: number
    ){
        return await this._answerService.getTotalCountsVotes(surveyId);
    }
}
