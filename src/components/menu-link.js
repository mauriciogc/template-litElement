import {LitElement, html, css} from 'lit-element';

class MenuLink extends LitElement {
    static get properties() {
        return {
            name: {Type: String},
            event: {type: String},
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
        #main-container div {
            color: black;
            text-decoration: none;
        }
        `;
    }

    dispatch() {
        this.dispatchEvent(new CustomEvent(this.event, {
            bubbles: true,
            composed: true
        }));
    }

    handleClick() {
        this.active = !this.active;
        this.dispatch();
    }

    render() {
        return html`
        <div id="main-container">
            ${this.event && this.name ? html`
            <div @click=${this.handleClick}>${this.name}</div>
            ` : ''}
        </div>
        `;
    }
}

customElements.define('menu-link', MenuLink);