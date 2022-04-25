import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { loginUserInput } from './dtos/login-user.input';
import { LoginResponse } from './dtos/login.response';
import { GqlAuthGuard } from './gql-authguard';


@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginuserInput: loginUserInput,
    @Context() context,
  ) {
    console.log(context);
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signup(@Args('CreateUserInput') createUser: CreateUserInput) {
    return this.authService.signup(createUser);
  }
}
