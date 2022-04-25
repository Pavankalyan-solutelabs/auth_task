import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { localStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';

@Module({
  imports:[PassportModule,UsersModule,JwtModule.register({
    signOptions:{expiresIn:"120s"},
    secret:"solutelabs_key"
  })],
  providers: [AuthService, AuthResolver,localStrategy,jwtStrategy]
})
export class AuthModule {}
