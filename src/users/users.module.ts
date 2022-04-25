import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './entities/user-entity';

@Module({
  imports:[TypeOrmModule.forFeature([userEntity]),],
  providers: [UsersResolver, UsersService],
  exports:[UsersService]
})
export class UsersModule {}
