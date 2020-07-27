import { LitElement, html, css } from "lit-element";
import "./components/hello-word";

class MyApp extends LitElement {
	static get properties() {
		return {
			message: { type: String },
		};
	}
	constructor() {
		super();
		this.message = "Mauricio";
	}
	render() {
		return html`
			<p>
				<h1>My App</h1>
				<my-hello message=${this.message}></my-hello>
			</p>
		`;
	}
}
customElements.define("my-app", MyApp);
