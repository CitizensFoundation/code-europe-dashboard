import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import '../../list-of-topics/list-of-topics.js';
import '../../list-of-topics/one-topic.js';
import { templateAbout } from './templateAbout.js';

import { FlexLayout } from  './flex-layout.js';

import '@material/mwc-button';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-icon';

export class DashboardApp extends LitElement {
  static get properties() {
    return {
      currentTopic: { type: Object },
      counts: { type: Object }
    };
  }

  static get styles() {
    return [FlexLayout, css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
      }

      header {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
      }

      header ul {
        display: flex;
        justify-content: space-around;
        min-width: 400px;
        margin: 0 auto;
        padding: 0;
      }

      header ul li {
        display: flex;
      }

      header ul li a {
        color: #5a5c5e;
        text-decoration: none;
        font-size: 18px;
        line-height: 36px;
      }

      header ul li a:hover,
      header ul li a.active {
        color: blue;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        margin-top: 16px;
      }

      .app-footer a {
      }

      [hidden] {
        display: none !important;
      }

      mwc-tab {
        color: #000;
      }

      .paceImage {
        margin-top: 48px;
        margin-bottom: 16px;
      }

      .eeaGrantsFooterText {
        font-size: 14px;
        margin-top: 0px;
      }

      .ceImage {
        width: 400px;
        padding-bottom: 16px;
      }

      @media (max-width: 600px) {
        .ceImage {
          width: 75%;
          height: inherit;
          padding-bottom: 16px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;

        }
      }
    `];
  }

  constructor() {
    super();
    this.page = '0';
    this.topicCounts = {};
    this.addEventListener("open-Topic", this._openTopic);
    this.addEventListener("close-Topic", this._closeTopic);
    this.addEventListener("years-and-counts", this._addYearsAndCounts);
  }

  _openTopic(event) {
    this.currentTopic = event.detail;
    this.page="Topic";
  }

  _closeTopic() {
    this.currentTopic = null;
    this.page="0";
  }

  _addYearsAndCounts(event) {
    this.topicCounts[event.detail.topicName] = event.detail.years;
    this.topicCounts = {...this.topicCounts};
  }

  render() {
    return html`
        <div class="paceImage layout horizontal center-center">
          <div>
            <img class="ceImage" src="https://codecidingeurope.eu/wp-content/uploads/2021/09/codeciding-europe-logo.png"/>
          </div>
        </div>
      <header ?hidden="${this.currentTopic}">
      </header>

      <main>
        ${this._renderPage()}
      </main>

      <p class="app-footer layout vertical center-center">
       <div class="eeaGrantsFooterText">
         This project benefits from a € 1.316.367,00 grant from Iceland, Liechtenstein and Norway through the EEA and Norway Grants Fund for Regional Cooperation. The aim of the project is to develop and test in real life an innovative model for citizen engagement in public policy decision-making based on enhanced tools for e-participation and digital democracy.
       </div>
       <div>
        <img src="https://codecidingeurope.eu/wp-content/uploads/2022/03/test-pre-header-001.png"/>
       </div>
      </p>
    `;
  }

  _tabSelected(event) {
    this.page = event.detail.index.toString();
    this.requestUpdate();
  }

  _renderPage() {
    switch (this.page) {
      case 'Topic':
        return html`
          <one-topic ?fullView="${true}" .topicData="${this.currentTopic}"></one-topic>
        `;
      case '0':
        return html`
          <list-of-Topics></list-of-Topics>
        `;
      default:
        return html`
          <p>Page not found try going to <a href="#main">Main</a></p>
        `;
    }
  }

  __onNavClicked(ev) {
    ev.preventDefault();
    this.page = ev.target.hash.substring(1);
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }
}
