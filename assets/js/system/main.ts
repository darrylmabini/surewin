import routes from 'Config/routes.json';
import page from 'page';

import { Router } from 'System/router';

let App: any = {};

new Router(page, routes).setRoutes();
