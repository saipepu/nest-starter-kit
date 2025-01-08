import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { loginDto } from './dto/login.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Public()
@ApiTags('Auth')
@Controller('')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('register')
  async regsiter(
    @Body()
    body: CreateUserDto
  ) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(
    @Body()
    body: loginDto
  ) {
    return this.authService.login(body);
  }
}
