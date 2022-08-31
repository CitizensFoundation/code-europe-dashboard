import { html, css, LitElement } from 'lit-element';
import { Data } from '../../dashboard-app/src/data.js';
import { ShadowStyles } from '../../dashboard-app/src/shadow-styles.js';

import './Topic.js';
import { BaseElement } from '../../dashboard-app/src/baseElement.js';

export class ListOfTopics extends BaseElement {
  static get styles() {
    return [
      ShadowStyles,
      css`
        :host {
          --page-one-text-color: #000;

          padding: 25px;
          color: var(--page-one-text-color);
        }

        .mdc-card {
          max-width: 850px;
          padding: 16px;
          background-color: #fff;
          margin-bottom: 32px;
        }
        .content {
          padding: 1rem;
        }
        .subtext {
          color: rgba(0, 0, 0, 0.54);
        }

        .group-spaced {
          justify-content: space-around;
        }

        .group-spaced > * {
          margin: 0 8px;
        }

        .container {
          display: flex;
          flex-direction: column;
          flex-basis: auto;
          width: 100%;
        }

        .contentText {
          font-size: 16px !important;
          color: #6f6f6f;
        }

        .contentTitle {
          font-size: 20px;
          margin-top: 0;
        }

        a {
          color: rgba(0, 0, 0, 0.64);
        }

        .readMore {
          color: #555;
        }

        @media (max-width: 600px) {
          .mdc-card {
            max-width: 100%;
            padding: 16px;
            margin: 0;
            background-color: #fff;
            margin-bottom: 32px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  renderIntro() {
    return html`
      <div class="mdc-card shadow-animation shadow-elevation-3dp" @click="${this._openTopic}">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
          <div class="content">
            <h2 class="mdc-typography--title contentTitle">Introduction to the CODE Europe Dashboard</h2>
            <div class="mdc-typography--body1 subtext contentText">
              <p>
                The CODE Europe Dashboard is a part of the EEA Funds funded
                <a href="https://codecidingeurope.eu/" target="_blank">CODECIDING EUROPE</a> project.
              </p>
              <p>
                The CODE Europe Dashboard allows to reveal relative trends between online-content that are
                connected to air quality. Building on the results of the case study, the
                CODE Europe researchers developed generalised search criteria targeting hundreds of
                keywords in the various languages.
              </p>
              <p>
              The CODE Europe Dashboard  uses the CommonCrawl method that has the ability to scan the web
                for results from 2013 to 2021. (The search does not include any private social media
                content.)
              </p>
              <p style="color: #F11;padding-top: 16px;">
                <b>NOTE: THIS IS A TEST VERSION WITH RANDOM TEST DATA</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCitizensEngagment() {
    return html``;
  }

  render() {
    return html`
      <div class="container">
        ${this.renderIntro()}
        ${Data.map(item =>
          item.topic == 'Citizen engagment'
            ? html`
                ${this.renderCitizensEngagment()}
                <one-topic .topicData="${item}"></one-topic>
              `
            : html`
                <one-topic .topicData="${item}"></one-topic>
              `,
        )}
      </div>
    `;
  }
}
