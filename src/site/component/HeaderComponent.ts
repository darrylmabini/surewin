import { Component } from "System/component";

export class HeaderComponent extends Component {
    selector: string = '#header-component'
    template: string = 'components/header.handlebars'

    data: Array<any> = [
        {
            title: 'Home',
            href: '/en'
        }, {
            title: 'About',
            href: '/en/about'
        }, {
            title: 'Sports List',
            href: '/en/sports'
        }
    ]

    render() {
        this.view().render(this.template, {
            container: this.selector
        });
    }
}