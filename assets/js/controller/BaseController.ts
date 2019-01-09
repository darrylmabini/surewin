require('Sass/app.scss');

import { View } from 'System/view';

export class BaseController {
    context: any

    constructor(context) {
        this.context = context;
    }

    view() {
        View.h = {
            basePath: this.basePath()
        };
        return View;
    }

    basePath() {
        return `/${this.context.params.lang}`;
    }
}