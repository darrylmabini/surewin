export class View {
    static h: any

    static async fullfill(callback) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });
    }

    static render(template: string, data: any = {}) {
        let container: any;
        import(`View/${template}`).then(handlebars => {
            if (typeof data.container === 'string') {
                container = document.querySelector(data.container);
            } else {
                container = document.getElementById('main-container');
            }
            delete data.container;
            data.h = this.h;
            container.innerHTML = handlebars.default(data);
        });
    }
}
