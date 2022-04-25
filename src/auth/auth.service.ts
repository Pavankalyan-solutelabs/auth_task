import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token } from 'graphql';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { userEntity } from 'src/users/entities/user-entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { loginUserInput } from './dtos/login-user.input';
import * as bcrypt from "bcrypt"
import { use } from 'passport';

@Injectable()
export class AuthService {

    constructor(private userService:UsersService, private jwtService:JwtService){}

    async validateUser(username:string, password:string):Promise<any>{
        const user=await this.userService.findOne(username)
        const validate=await bcrypt.compare(password, user?.password);
        if(user && validate){
           const  {password,...result}=user 
            return result;
        }
        return "not valid credentials";
    }

    async login(user:User){
       // const user=await this.userService.findOne(loginuserInput.username)

        // const  {password,...result}=user ;
        return {
            access_token:this.jwtService.sign({
                username:user.username,
                sub:user.id
            }),
            user
        }
    }

    async signup(createUser: CreateUserInput){
        const user=await this.userService.findOne(createUser.username);
        console.log('user',user)
        if(user){
            throw new Error("User already in use...!")
        }
        
        const HashedPswd=await bcrypt.hash(createUser.password,10);
        createUser.password=HashedPswd;
        return this.userService.create(createUser);
    }
}
