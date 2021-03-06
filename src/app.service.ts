import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Elgondor';
  }


  googleLogin(req){
    if(!req.user){
      return "No user from google";
    }
    return{
      message: "User info from google",
      user: req.user
    }
  }


}
