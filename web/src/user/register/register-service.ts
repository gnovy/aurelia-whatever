import {inject} from 'aurelia-framework';
import {UserService} from "../user-service";
import {User} from "../user";

@inject(UserService)
export class RegisterService {
  constructor(private userService: UserService) {}

  register(newUser: User): boolean {
    if(!this.userService.isUserNameExists(newUser.userName)) {
      this.userService.add(newUser);
      return false;
    }
    else{
      return true;
    }
  }
}
