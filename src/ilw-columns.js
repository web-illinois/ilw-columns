import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import styles from './ilw-columns.styles';
import { ManualSlotController } from './ManualSlotController.js';
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

    _observer = new ManualSlotController(this);

    constructor() {
        super();
        this.theme = '';
        this.mode = '';
        this.width = '';
        this.gap = '';
        this.padding = '0 0 40px 0';
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
        if (this.mode == 'sidebar-left') {
            return 'sidebar-left';
        }
        if (this.mode == 'sidebar-right') {
            return 'sidebar-right';
        }
        return '';
    }

    get paddingStyle() {
        return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get gapStyle() {
        return this.gap == '' ? this.mode == 'sidebar-left' || this.mode == 'sidebar-right' ? '30px' : '0' : this.gap;
    }

    get outerWidth() {
      return this.width == 'full' || this.width == 'auto' ? 'fixed' : '';
    }
    
    get innerWidth() {
      return this.width == 'auto' || this.width == 'page' ? 'fixed' : '';
    }

    render() {
      return html`
      <style>:host { --ilw-columns--gap: ${this.gapStyle}; } </style>
      <div class="columns-outer ${this.theme} ${this.outerWidth}">
          <div class="columns ${this.innerWidth} ${this.columnsClass} ${this.reverseClass}" style="${this.paddingStyle}">
            ${map(Array.from(this.children), () => html`<div><slot></slot></div>`)}
          </div>
      </div>
      `;
    }
}

customElements.define('ilw-columns', Columns);