import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config:TypeOrmModuleOptions={
    type:'postgres',
    host:'localhost',
    username:'postgres',
    password:'pg@solutelabs',
    port:5432,
    database:'gsql_auth',
    synchronize:true,
    autoLoadEntities:true

}