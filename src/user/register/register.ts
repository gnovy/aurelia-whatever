import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {RegisterService} from "./register-service";
import {User} from "../user";

@inject(RegisterService, Router)
export class Register {
  isUserNameExists = false;
  newUser: User;

  constructor(private registerService: RegisterService, private router: Router) {}

  register() {
    this.isUserNameExists = this.registerService.register(this.newUser);

    if(!this.isUserNameExists){
      this.router.navigate("");
    }
  }
}
