import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestionDto';

import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {

    constructor(
        private readonly _surveyService: SurveyService
    ){}

    @Post("/")
    async createSurvey(@Body() createQuestionDto: CreateQuestionDto){
        return await this._surveyService.createOne(createQuestionDto.texts);
    }
    @Get("/home") 
    async getRandomSurvey (){
        return await this._surveyService.getRandomSurvey();
    }
    @Get("/")
    getHello(){
        return this._surveyService.getAll();
    }



}
