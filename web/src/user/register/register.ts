import {autoinject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {RegisterService} from "./register-service";
import {User} from "../user";
import {DialogController} from 'aurelia-dialog';
import {validateTrigger, ValidationController, ValidationRules} from "aurelia-validation";
import {inject, NewInstance} from 'aurelia-dependency-injection';

@inject(RegisterService, DialogController, NewInstance.of(ValidationController))
export class Register {
  isUserNameExists = false;
  newUser: User;

  constructor(private registerService: RegisterService,
              private dialogController: DialogController,
              private validationController: ValidationController) {
    this.newUser = new User();

    ValidationRules
      .ensure((u: User) => u.userName)
        .email()
        .required()
      .ensure((u: User) => u.firstName)
        .required()
      .ensure((u: User) => u.lastName)
        .required()
      .ensure((u: User) => u.password)
        .required()
      .on(this.newUser);
  }

  register() {
    this.validationController.validate()
      .then(result => {
        if(result.valid){
          this.isUserNameExists = this.registerService.register(this.newUser);
          this.dialogController.ok();
        }
        else{
          return;
        }
      });

    /*if(!this.isUserNameExists){
      this.router.navigate("");
    }*/
  }
}
