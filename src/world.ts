export default class world {
  message: string

  constructor(message: string) {
    this.message = message
  }

  public sayhello(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
