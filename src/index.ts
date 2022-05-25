import '@webcomponents/webcomponentsjs';

class MainApp extends HTMLElement {

  connectedCallback() {
    this.innerHTML = '<h1>hello</h1>';
  }

}

globalThis.customElements.define('app-main', MainApp);
