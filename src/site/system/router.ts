export class Router {
    page: any
    routes: any

    constructor(page, routes) {
        this.page = page;
        this.routes = routes;
    }

    setRoutes() {
        let self: any = this;

        for (const path in this.routes) {
            if (this.routes.hasOwnProperty(path)) {
                const namespace: string = this.routes[path];
                this.page('/:lang' + path, function(context) {
                    self.initializeController(context, namespace);
                });
            }
        }

        this.notFoundHandler();
        this.page();
    }

    initializeController(context: any, namespace: string = 'ExceptionController') {
        import(`Controller/${namespace}`).then(c => {
            const controller = new c[namespace](context);
            if (typeof controller.template === 'function') {
                controller.template();
            }
            if (typeof controller.render === 'function') {
                controller.render();
            }
            if (typeof controller.components === 'function') {
                const components = controller.components();
                for (const i in components) {
                    if (components.hasOwnProperty(i)) {
                        components[i].render();
                    }
                }
            }
        });
    }

    notFoundHandler() {
        this.page('*', function(context) {
            import('Controller/NotFoundController').then(c => {
                const controller: any  = new c['NotFoundController'](context);
                if (typeof controller.template === 'function') {
                    controller.template();
                }
                if (typeof controller.render === 'function') {
                    controller.render();
                }
                if (typeof controller.components === 'function') {
                    const components = controller.components();
                    for (const i in components) {
                        if (components.hasOwnProperty(i)) {
                            components[i].render();
                        }
                    }
                }
            });
        });
    }
}