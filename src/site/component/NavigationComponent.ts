import { Component } from "System/component";

export class NavigationComponent extends Component {
    selector: string = '#navigation-component'
    template: string = 'components/navigation.handlebars'

    getNavigation() {
        return [
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
        ];
    }

    render() {
        this.view().render(this.template, {
            container: this.selector
        });
    }
}