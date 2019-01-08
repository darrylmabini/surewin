export class View {
    static render(template: string, data: any = {}) {
        let container = data.container || document.getElementById('content');
        delete data.container;
        import(`view/${template}`).then(handlebars => {
            container.innerHTML = handlebars.default(data);
        });
    }
}
