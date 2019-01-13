import request from 'axios';

import { Component } from "System/component";

export class SportsComponent extends Component {
    selector: string = '#content-component'
    template: string = 'components/sports.handlebars'

    render() {
        const c = this;

        request.all([this.getSports()]).then(request.spread(function (sports) {
            c.view().render(c.template, {
                container: c.selector,
                sports: sports.data.data
            });
        })).catch(function(error) {
            console.log(error);
        });
    }

    private getSports() {
        return request.get('https://api.the-odds-api.com/v3/sports/?apiKey=9e91bb36baf56ca95af2d82c7c683eee');
    }
}