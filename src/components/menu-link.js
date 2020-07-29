import {LitElement, html, css} from 'lit-element';

class MenuLink extends LitElement {
    static get properties() {
        return {
            name: {Type: String},
            link: {type: Object},
            active: {
                type: Boolean,
                reflect: true
            }
        }
    }

    constructor() {
        super();
        this.active = false;
    }

    static get styles() {
        return css`
        :host {
            display: block
        }
        #main-container {
            cursor: pointer;
            text-align: center;
            padding: 0.7rem 0.4rem; 
        }
        #main-container a {
            color: black;
            text-decoration: none;
        }
        `;
    }

    handleClick() {
        this.active = !this.active;
    }

    render() {
        return html`
        <div id="main-container">
            <a @click=${this.handleClick} href=${this.link}>${this.name}</a>
        </div>
        `;
    }
}

customElements.define('menu-link', MenuLink);