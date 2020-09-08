import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

class AppNavigator extends navigator(LitElement) {
	static get properties() {
        return {
            href: {type: String}
        };
    }

    static get styles() {
        return css`
        :host  {
            display: block;
        }
        .main-container {
            width: 100%;
            max-width: 100%;
        }
        `;
    }

    constructor() {
        super();
        this.href = '';
    }
    
	render() {
    return html`<div class="main-container" @route-change=${this._changeRoute}>
        <slot></slot>
    </div>`;
    }
    
    _changeRoute({detail}) {
        // this.href = `/${detail}`;
		this.navigate(`/${detail}`);
	}
}
customElements.define("app-navigator", AppNavigator);
