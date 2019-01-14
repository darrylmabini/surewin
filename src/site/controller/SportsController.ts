import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";
import { SportsComponent } from "Component/SportsComponent";

export class SportsController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
            new SportsComponent(this.context)
        ];
    }

    layout() {
        this.view().render('layouts/classic.handlebars');
    }
}
