import {autoinject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {RegisterService} from "./register-service";
import {User} from "../user";
import {DialogController} from 'aurelia-dialog';

@autoinject
export class Register {
  isUserNameExists = false;
  newUser: User;

  constructor(private registerService: RegisterService,
              private router: Router,
              private dialogController: DialogController) {}

  register() {
    this.isUserNameExists = this.registerService.register(this.newUser);

    this.dialogController.ok();

    /*if(!this.isUserNameExists){
      this.router.navigate("");
    }*/
  }

  get canRegister() {
    return this.newUser && this.newUser.userName && this.newUser.firstName && this.newUser.lastName && this.newUser.password;
  }
}
