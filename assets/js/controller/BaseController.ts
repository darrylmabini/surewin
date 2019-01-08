import { View } from 'system/view';

export class BaseController {
    context: any

    constructor(context) {
        this.context = context;
    }

    view() {
        return View;
    }
}