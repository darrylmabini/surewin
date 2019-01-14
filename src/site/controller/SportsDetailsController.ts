import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";
import { SportsDetailsComponent } from "Component/SportsDetailsComponent";

export class SportsDetailsController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
            new SportsDetailsComponent(this.context)
        ];
    }

    layout() {
        this.view().render('layouts/classic.handlebars');
    }
}
