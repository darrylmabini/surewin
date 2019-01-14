import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";
import { AboutContentComponent } from "Component/AboutContentComponent";

export class AboutController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
            new AboutContentComponent(this.context)
        ];
    }

    layout() {
        this.view().render('layouts/classic.handlebars');
    }
}