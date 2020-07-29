import {LitElement, html, css}from 'lit-element';

class AppHome extends LitElement {
    static get properties() {
        return {
                image: {type: String},
                title: {type: String},
                button: {type: Object}
        }
    }

    constructor() {
        super();
        this.image = '/';
        this.title = '';
        this.button = {
            name = '',
            event = 'button-clicked'
        }
    }

    static get styles() {
        return css``;
    }

    dispatch(eventName) {
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
        <div id="main-container">
            <img src=${this.image}/>
            <button @click=${() => {this.dispatch(this.button.event)}}>${this.button.name}</button>
        </div>
        `;
    }
}

customElements.define('app-home', AppHome);