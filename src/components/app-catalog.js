import { LitElement, html } from "lit-element";

class AppCatalog extends LitElement {
	static get properties() {
		return {
			message: { type: String },
		};
	}
	render() {
		return html`<p>app-catalog</p>`;
	}
}
customElements.define("app-catalog", AppCatalog);
