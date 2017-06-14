import {User} from "./user";

export class UserService {
  users: User[] = [];

  isUserNameExists(userName: string): boolean {
    return (this.users.findIndex((u) => u.userName === userName) !== -1);
  }

  add(newUser: User) {
    this.users.push(newUser);
  }
}
