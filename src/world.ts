export default class world {
    message: string;

    constructor(message: string) {
        this.message = message
    }

    public sayhello(elem: HTMLElement | null) {
        if (elem) {
            elem.innerText = this.message;
        }
    }
}