import { PassportStrategy } from "@nestjs/passport";

import { Strategy, VerifyCallback } from "passport-google-oauth20";

import { Injectable } from "@nestjs/common";

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: "1003503080376-tk1kuuvhpftvlim2fhg3i7g0md9ippu9.apps.googleusercontent.com",
            clientSecret: "qIxNqdh3wecQJGYIaYSL_MaW",
            callbackURL: "http://localhost:3000/auth/google",
            scope: ["email", "profile"]
        });

    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>{
        const { name, emails } = profile;

        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            accessToken
        };

        done(null, user);

    }
}