    import { LitElement, html, css } from "lit-element";

class AppButton extends LitElement {
	static get properties() {
		return {
            event: { type: String },
            name: {type: String}
		};
    }

    static get styles() {
        return css`
        #shop-button {
            background-color: #FFF;
            border: none;
        }
        #shop-button:hover {
            cursor: pointer;
        }
        #shop-button > * {
            display: inline-block;
            box-sizing: border-box;
            border: 2px solid #000;
            background-color: #FFF;
            font-size: 14px;
            font-weight: 500;
            color: var(--app-primary-color);
            margin: 0;
            padding: 8px 44px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 0;
            outline: none;
        }
        @media (max-width: 550px) {
            #shop-button > * {
                font-size: 1.3rem;
            }
        }
        `;
    }

    constructor() {
        super();
        this.name = '';
        this.event = '';
    }
    
	render() {
		return html`
        <button id="shop-button" @click=${this.dispatch}>
            <div>${this.name}</div>
        </button>
        `;
    }
    
    dispatch() {
        if (this.event) {
            this.dispatchEvent(new CustomEvent(this.event, {
                bubbles: true,
                composed: true
            }));
        }
    }
}
customElements.define("app-button", AppButton);
