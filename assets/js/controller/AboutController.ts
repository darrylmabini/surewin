import { BaseController } from "./BaseController";

export class AboutController extends BaseController {
    render() {
        this.view().render('components/about.handlebars');
    }
}