import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import styles from './ilw-columns.styles';
import './ilw-columns.css';

class Columns extends LitElement {
    static shadowRootOptions = {...LitElement.shadowRootOptions, slotAssignment: "manual"};
    static get properties() {
        return {
            theme: { type: String, attribute: true },
            mode: { type: String, attribute: true },
            width: { type: String, attribute: true },
            gap: { type: String, attribute: true },
            padding: { type: String, attribute: true },
            reverse: { type: Boolean, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
        this.mode = '';
        this.width = '';
        this.gap = '';
        this.padding = '';
        this.reverse = false;
    }

    get _items() {
        return Array.from(this.children);
    } 

    get reverseClass() {
        return this.reverse ? 'reverse' : '';
    }

    get columnsClass() {
        if (this.mode == '2x1') {
            return 'first2';
        }
        if (this.mode == '3x1') {
            return 'first3';
        }
        if (this.mode == '1x2') {
            return 'last2';
        }
        if (this.mode == '1x3') {
            return 'last3';
        }
        if (this.mode == '1x2x1') {
            return 'middle2';
        }
        return '';
    }

    get paddingStyle() {
        return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get gapStyle() {
        return this.gap == '' ? '' : 'column-gap: ' + this.gap + ';';
    }

    get outerWidth() {
      return this.width == 'full' || this.width == 'auto' ? 'fixed' : '';
    }
    
    get innerWidth() {
      return this.width == 'auto' ? 'fixed' : '';
    }

    refresh() {
        let items = this._items;
        let slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
        if (items.length > slots.length) {
            let columnBase = this.shadowRoot.querySelector('div.columns');
            for (let i = slots.length; i < items.length; i++) {
                let div = document.createElement('div');
                div.appendChild(document.createElement('slot'));
                columnBase.appendChild(div);
            }
        } else if (items.length < slots.length) {
            let columnBase = this.shadowRoot.querySelector('div.columns');
            for (let i = items.length; i < slots.length; i++) {
                columnBase.children[0].remove();
            }
        }
        this._refreshInternal();
    }

    _refreshInternal() {
        let items = this._items;
        let slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
        for (let slot of slots) {
          if (items.length > 0) {
            slot.assign(items.shift());
          }
        }
    }

    updated(changed) {
        this._refreshInternal();
    }

    render() {
      return html`
      <div class="columns-outer ${this.theme} ${this.outerWidth}">
          <div class="columns ${this.innerWidth} ${this.columnsClass} ${this.reverseClass}" style="${this.paddingStyle} ${this.gapStyle}">
            ${map(this._items, () => html`<div><slot></slot></div>`)}
          </div>
      </div>
      `;
    }
}

customElements.define('ilw-columns', Columns);