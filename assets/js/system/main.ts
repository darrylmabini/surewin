import routes from 'config/routes.json';
import page from 'page';

import { Router } from 'system/router';

let App: any = {};

new Router(page, routes).setRoutes();
