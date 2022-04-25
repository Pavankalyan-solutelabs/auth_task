import { Field, ObjectType } from "@nestjs/graphql";
import { userEntity } from "src/users/entities/user-entity";
import { User } from "src/users/entities/user.entity";



@ObjectType()
export class LoginResponse{

    @Field()
    access_token:string

    @Field(()=>User)
    user:User
}