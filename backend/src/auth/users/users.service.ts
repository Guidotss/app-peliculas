import { Injectable, Logger,InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, userSchema } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  private handlerDbErro(error: any): never {
    this.logger.error(error);
    if (error.code === 11000) {
      throw new BadRequestException('Email already exists');
    }
    throw new InternalServerErrorException('Internal server error');
  }

  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public async createUser(user:CreateUserDto) { 
    try{
      const newUser = new this.userModel({
        ...user,
        password: this.hashPassword(user.password),
      });
      return await newUser.save();
    }catch(error){
      this.handlerDbErro(error);
    }

  }

}
