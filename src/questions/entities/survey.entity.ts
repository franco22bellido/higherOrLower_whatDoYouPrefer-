import { AnswersEntity } from 'src/answer/entities/answers.entity';
import {Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { CreateDateColumn } from 'typeorm/decorator/columns/CreateDateColumn';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { QuestionsEntity } from './questions.entity';


@Entity({name: "survey"})
export class SurveyEntity {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @OneToMany(()=> QuestionsEntity, (questions) => questions.survey, {eager: true, cascade: true})
    questions: QuestionsEntity[];

    @OneToMany(()=> AnswersEntity,(ansquers) =>ansquers.survey)
    answers: AnswersEntity[] 

    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}