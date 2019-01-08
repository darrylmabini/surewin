export class View {
    static h: any

    static render(template: string, data: any = {}) {
        let container = data.container || document.getElementById('content');
        delete data.container;
        data.h = this.h;
        import(`View/${template}`).then(handlebars => {
            container.innerHTML = handlebars.default(data);
        });
    }
}
