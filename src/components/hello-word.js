import { LitElement, html } from "lit-element";

class HelloWorld extends LitElement {
	static get properties() {
		return {
			message: { type: String },
		};
	}
	render() {
		return html`<p>Hello, ${this.message}</p>`;
	}
}
customElements.define("my-hello", HelloWorld);
