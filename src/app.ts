import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.map([
      { route: '', moduleId: 'home/home', title: 'Aurelia Whatever'},
      { route: 'login', moduleId: 'login/login', title: 'Login'},
      { route: 'register', moduleId: 'user/register/register', title: 'Register', name: 'register'},
    ]);

    this.router = router;
  }
}
