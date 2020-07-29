import { LitElement, html, css} from "lit-element";

// import components
import './app-toolbar';
import './menu-links';

class AppHeader extends LitElement {
    static get properties () {
        return {
            title: {type: String},
            leftIcon: {type: Object},
            rightIcon: {type: Object},
            menuOptions: {type: Array}
        }
    }

    constructor() {
        super();
        this.title = "",
        this.leftIcon = {};
        this.rightIcon = {};
        this.menuOptions = [];
    }

    static get styles() {
        return css`
        :host {
            display: block;
            width: 100%;
            font-family: 'Roboto', 'Noto', sans-serif;
        }
        #main-container {
        }
        #sub-container {
            padding: 0.5rem 0.7rem;
            display: flex;
            flex-direction: column;
        }
        `;
    }

    render() {
        return html`
            <div id="main-container">
                <div id="sub-container">
                    <app-toolbar 
                    .title=${this.title}
                    .leftIcon=${this.leftIcon}
                    .rightIcon=${this.rightIcon}
                    ></app-toolbar>
                    <menu-links 
                    .options=${this.menuOptions}></menu-links>
                </div>
            </div>
            `;
    }
}

customElements.define("app-header", AppHeader);

