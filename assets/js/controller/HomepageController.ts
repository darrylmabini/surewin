import { BaseController } from "Controller/BaseController";

export class HomepageController extends BaseController {
    render() {
        this.view().render('components/home.handlebars');
    }
}
