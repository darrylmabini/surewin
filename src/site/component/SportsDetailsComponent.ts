import request from 'axios';

import { Component } from "System/component";

export class SportsDetailsComponent extends Component {
    selector: string = '#content-component'
    template: string = 'components/sports-details.handlebars'

    render() {
        const c = this;

        request.all([this.getOdds()]).then(request.spread(function (odds: any) {
            c.view().render(c.template, {
                container: c.selector,
                sportsOdds: c.filterOdds(odds.data.data)
            });
        })).catch(function(error) {
            console.log(error);
            c.view().render(c.template, {
                container: c.selector
            });
        });
    }

    private filterOdds(odds: any) {
        let sportsOdds: Array<any> = [];
        for (const i in odds) {
            if (odds.hasOwnProperty(i) && odds[i].sport_key == this.context.params.key) {
                sportsOdds.push(odds[i]);
            }
        }
        return sportsOdds;
    }

    private getOdds() {
        return request.get('https://api.the-odds-api.com/v3/odds?sport=soccer_epl&region=uk&mkt=h2h&apiKey=9e91bb36baf56ca95af2d82c7c683eee');
    }
}