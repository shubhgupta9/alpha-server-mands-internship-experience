import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { ForceDotComStrategy } from './forcedotcom.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  providers: [AuthService, ForceDotComStrategy, SessionSerializer],
  imports: [UsersModule, PassportModule.register({ session: true })],
})
export class AuthModule {}
