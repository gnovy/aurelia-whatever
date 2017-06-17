import {Router, RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-framework';
import {DialogService} from "aurelia-dialog";
import {Register} from './user/register/register';

@autoinject
export class App {
  router: Router;

  constructor(private dialogService: DialogService){}

  configureRouter(config: RouterConfiguration, router: Router){
    config.map([
      { route: '', moduleId: 'home/home', title: 'Aurelia Whatever'},
      { route: 'login', moduleId: 'login/login', title: 'Login'}//,
      //{ route: 'register', moduleId: 'user/register/register', title: 'Register', name: 'register'},
    ]);

    this.router = router;
  }

  register() {
    this.dialogService.open({ viewModel: Register, lock: false }).whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('good');
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });

  }
}
