import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";
import { HomeContentComponent } from "Component/HomeContentComponent";

export class HomepageController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
            new HomeContentComponent(this.context)
        ];
    }

    layout() {
        this.view().render('layouts/classic.handlebars');
    }
}
