import { BaseController } from "./BaseController";
import { getSupportedCodeFixes } from "typescript";

export class HomepageController extends BaseController {
    render() {
        this.view().render('components/home.handlebars');
    }
}