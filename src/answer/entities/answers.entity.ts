import { SurveyEntity } from 'src/questions/entities/survey.entity';
import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn} from 'typeorm'

@Entity({name: "answers"})
export class AnswersEntity {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    votedOption : number;

    @Column()
    surveyId: number;

    @ManyToOne(() => SurveyEntity, (survey )=> survey.answers)
    @JoinColumn({
        name: "surveyId",
        referencedColumnName:"id"
    })
    survey: SurveyEntity;
}