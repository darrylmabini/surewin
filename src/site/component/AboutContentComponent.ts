import { Component } from "System/component";

export class AboutContentComponent extends Component {
    selector: string = '#content-component'
    template: string = 'components/about-content.handlebars'

    render() {
        this.view().render(this.template, {
            container: this.selector
        });
    }
}