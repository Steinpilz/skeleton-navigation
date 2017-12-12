import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./welcome'),      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./users'),        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./child-router'), nav: true, title: 'Child Router' },
      { route: 'test',          name: 'test',         moduleId: PLATFORM.moduleName('./test/dynamic-view-host'), nav: true, title: 'Test Page' },
    ]);

    this.router = router;
  }
}
