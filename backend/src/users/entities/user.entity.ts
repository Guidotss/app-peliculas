import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserFilms } from 'src/interfaces';
import { Document } from 'mongoose';

Schema(); 
export class User extends Document {

    @Prop({
        required: true,
    })
    name: string; 

    @Prop({
        required: true,
        unique: true
    })
    email: string; 


    @Prop({
        required: true,
    })
    password: string;

    @Prop({
        required: false
    })
    film: UserFilms[]; 
}


export const userSchema = SchemaFactory.createForClass(User); 