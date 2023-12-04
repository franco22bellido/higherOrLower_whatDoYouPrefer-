import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm'
import { SurveyEntity } from './survey.entity';

@Entity({name: "questions"})
export class QuestionsEntity{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar"})
    text: string;

    @Column()
    surveyId: number

    @ManyToOne(()=> SurveyEntity, (survey)=> survey.questions, { eager: false} )
    @JoinColumn(
        {
            name: "surveyId",
            referencedColumnName: "id"
        }
    )
    survey: SurveyEntity;
    
}