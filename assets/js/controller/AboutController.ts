import { BaseController } from "Controller/BaseController";

export class AboutController extends BaseController {
    render() {
        this.view().render('components/about.handlebars');
    }
}