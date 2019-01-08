export class Router {
    page: any
    routes: any

    constructor(page, routes) {
        this.page = page;
        this.routes = routes;
    }

    setRoutes() {
        let self = this;

        for (const path in this.routes) {
            if (this.routes.hasOwnProperty(path)) {
                const namespace: string = this.routes[path];
                this.page('/:lang' + path, function(context) {
                    self.initializeController(context, namespace);
                });
            }
        }

        this.page();
    }

    initializeController(context: any, namespace: string = 'ExceptionController') {
        import(`controller/${namespace}`).then(c => {
            const controller = new c[namespace](context);
            controller.render();
        });
    }
}