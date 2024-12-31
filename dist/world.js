"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class world {
    constructor(message) {
        this.message = message;
    }
    sayhello(elem) {
        if (elem) {
            elem.innerText = this.message;
        }
    }
}
exports.default = world;
