import {LitElement, html, css} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat'

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
    }

    render() {
        return html`
        <div id="main-container">
            ${typeof this.options === 'object' && this.options.length ? repeat(this.options, item => item.name,
                (option, index) => html`<menu-link 
            .name=${option.name}
            .linkId=${option.categoryId}
            .event=${option.event}
            @menu-link-clicked=${this._sendRoute}></menu-link>`) : ''}
        </div>
        `;
    }

    _sendRoute({detail}) {
        this.dispatchEvent(new CustomEvent('route-change', {
            bubbles: true,
            composed: true,
            detail: `products/${detail.linkId}`
        }));
    }
}

customElements.define('menu-links', MenuLinks);