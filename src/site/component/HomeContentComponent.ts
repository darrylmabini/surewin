import { Component } from "System/component";

export class HomeContentComponent extends Component {
    selector: string = '#content-component'
    template: string = 'components/home-content.handlebars'

    render() {
        this.view().render(this.template, {
            container: this.selector
        });
    }
}