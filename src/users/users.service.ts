import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { userEntity } from './entities/user-entity';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(userEntity) private userRepo:Repository<userEntity>){}

  async create(createUserInput: CreateUserInput):Promise<userEntity> {

    let user=await this.userRepo.create(createUserInput)
    console.log("service",user);
    return this.userRepo.save(user) ;
  }

  async findAll():Promise<userEntity[]> {
    return this.userRepo.find();
  }

  async findOne(userName:string):Promise<userEntity> {
    return this.userRepo.findOne({where:{username:userName}})
  }

}
