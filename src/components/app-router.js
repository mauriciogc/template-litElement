import { LitElement, html } from "lit-element";
import { outlet } from 'lit-element-router';

class AppRouter extends outlet(LitElement) {
	render() {
		return html`<slot></slot>`;
	}
}
customElements.define("app-router", AppRouter);
