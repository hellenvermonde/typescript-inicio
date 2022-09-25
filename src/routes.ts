import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
    
    CreateCourseService.execute({
        name:"Hellen",
        educator:"NodeJS",
        duration:10
    });

    CreateCourseService.execute({
        name:"Diego",
        educator:"ReactJS",
    });

    return response.send();
}