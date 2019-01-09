import request from 'axios';

import { BaseController } from "Controller/BaseController";

export class SportsDetailsController extends BaseController {
    render() {
        const c = this;

        request.all([this.getOdds()]).then(request.spread(function (odds: any) {
            let sportsOdds: Array<any> = [];
            let oddsData: any = odds.data.data;

            for (const i in oddsData) {
                if (oddsData.hasOwnProperty(i) && oddsData[i].sport_key == c.context.params.key) {
                    sportsOdds.push(oddsData[i]);
                }
            }
            
            c.view().render('components/sports-details.handlebars', {
                sportsOdds: sportsOdds
            });
        })).catch(function(error) {
            c.view().render('components/sports-details.handlebars', {
                sportsOdds: {}
            });
        });
    }

    private getOdds() {
        return request.get('https://api.the-odds-api.com/v3/odds?sport=soccer_epl&region=uk&mkt=h2h&apiKey=9e91bb36baf56ca95af2d82c7c683eee');
    }
}
