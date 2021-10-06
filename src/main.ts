import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
const passport = require('passport'); // authentication

import { AppModule } from './app.module';
const ForceDotComStrategy = require('passport-forcedotcom').Strategy;

passport.use(
  new ForceDotComStrategy(
    {
      clientID:
        '3MVG9fe4g9fhX0E5HqS7dPgkOKG3kzEx.nOt.GDIAT5vsat5IMbDsyg.2qzPJO03vqspeak8SR_Dz47AfCoQJ',
      clientSecret:
        '9902888FA930772B6260624BDB1CFDD4A1D2DB5CC7AE171127FC6109F6935C42',
      callbackURL: 'http://localhost:3000/login/salesforce/return',
    },
    function (token, tokenSecret, profile, done) {
      return done(null, profile);
    },
  ),
);
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.get('/login/salesforce', passport.authenticate('salesforce'));
  await app.listen(80);
}
bootstrap();
