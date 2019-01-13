import request from 'axios';

import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";

export class SportsController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
        ];
    }

    render() {
        const c = this;

        request.all([this.getSports()]).then(request.spread(function (sports) {
            c.view().render('components/sports.handlebars', {
                sports: sports.data.data
            });
        })).catch(function(error) {
            
        });
    }

    private getSports() {
        return request.get('https://api.the-odds-api.com/v3/sports/?apiKey=9e91bb36baf56ca95af2d82c7c683eee');
    }
}
