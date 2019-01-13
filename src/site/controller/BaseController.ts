import { View } from 'System/view';

export class BaseController {
    context: any
    storage: any

    constructor(context) {
        this.context = context;
    }

    view() {
        View.h = {
            basePath: this.basePath(),
            currentPath: this.currentPath()
        };
        return View;
    }

    basePath() {
        return `/${this.context.params.lang}`;
    }

    currentPath() {
        return this.context.path;
    }
}