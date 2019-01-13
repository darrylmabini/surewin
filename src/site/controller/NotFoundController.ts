import { BaseController } from "Controller/BaseController";

export class NotFoundController extends BaseController {
    render() {
        this.view().render('components/404.handlebars');
    }
}