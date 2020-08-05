import {LitElement, html, css} from 'lit-element';

// import components
import './menu-link';

class MenuLinks extends LitElement {
    static get properties() {
        return {
            options: {type: Array}
        }
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        #main-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        #main-container menu-link {
            margin: 0rem 1rem;
        }
        `;
    }

    constructor() {
        super();
        this.options = [];
    }

    render() {
        return html`
        <div id="main-container">
            ${this.options.map(option => html`<menu-link 
            .name=${option.name}
            .link=${option.link}></menu-link>`)}
        </div>
        `;
    }
}

customElements.define('menu-links', MenuLinks);