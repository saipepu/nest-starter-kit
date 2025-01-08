import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async register(user: any) {

    // --------------------------------
    // TODO: CHECK IF THE USER ALREADY EXISTS
    // --------------------------------

    const existingOrganizer = await this.userService.findByEmail(user.email);

    if(existingOrganizer) throw new UnauthorizedException('User already exists');

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newOrganizer = await this.userService.create({
      ...user, hashedPassword: hashedPassword
    });

    return newOrganizer;
  }

  async login(payload: loginDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findByEmail(payload.email);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(payload.password, user.hashedPassword);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.jwtService.sign({ email: user.email, sub: user._id });

    return { accessToken };
  }
}
