import { BaseController } from "Controller/BaseController";

import { HeaderComponent } from "Component/HeaderComponent";
import { NavigationComponent } from "Component/NavigationComponent";

export class HomepageController extends BaseController {
    components() {
        return [
            new HeaderComponent(this.context),
            new NavigationComponent(this.context),
        ];
    }

    render() {
        this.view().render('components/home.handlebars');
    }
}
