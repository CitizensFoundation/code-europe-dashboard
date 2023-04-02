import { LitElement, html, css } from 'lit-element';
import '../../dashboard-app/src/shadow-styles.js';
import { ShadowStyles } from '../../dashboard-app/src/shadow-styles.js';
import { BaseElement } from '../../dashboard-app/src/baseElement.js';
import '@material/mwc-textarea';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-linear-progress';
import { FlexLayout } from '../../dashboard-app/src/flex-layout.js';
import { Data, DataLabels } from '../../dashboard-app/src/data.js';

export class Topic extends BaseElement {
  static get styles() {
    return [
      FlexLayout,
      ShadowStyles,
      css`
        :host {
          display: block;
          background-color: #fff;
          margin-bottom: 16px;
        }

        .mdc-card {
          max-width: 850px;
          padding: 16px;
          cursor: pointer;
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

        mwc-textarea {
          width: 300px;
        }

        mwc-icon {
          position: absolute;
          left: 16px;
          top: 16px;
          height: 96px;
          width: 96px;
        }

        .contentText {
          font-size: 16px !important;
        }

        .contentTitle {
          font-size: 20px;
          margin-top: 0;
        }


        mwc-button {
          margin-top: 24px;
          margin-left: 85px;
          margin-bottom: 32px;
        }

        mwc-textarea {
          line-height: 1;
        }

        mwc-icon {
          color: #000;
        }

        a {
          color: #444;
        }

        mwc-linear-progress {
          --mdc-theme-primary: #000;
          margin-top: 8px;
        }

        mwc-button.openButton {
          color: #000;
          --mdc-theme-primary: #000;
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          margin-top: 32px;
          margin-bottom: 0px;
        }

        #trend-chart {
          height: 300px;
          width: 800px;
          margin-top: 32px;
        }

        #sentiment-chart {
          height: 150px;
          width: 800px;
          margin-top: 32px;
        }

        @media (max-width: 600px) {
          #sentiment-chart {
            height: 150px;
            width: 100%;
          }

          #trend-chart {
            height: 300px;
            width: 100%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      topicData: { type: Object },
      fullView: { type: Boolean },
      responses: { type: Array },
      topicQuotes: { type: Array },
    };
  }

  render() {
    return html`
      <div class="mdc-card shadow-animation shadow-elevation-3dp">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
          <div class="content">
            <h2 class="mdc-typography--title contentTitle">Air Quality: ${this.topicData.title}</h2>
            <div class="mdc-typography--body1 subtext contentText">
              ${this.topicData.description}
            </div>
          </div>
          <canvas id="trend-chart" width="800" height="300"></canvas>
        </div>
      </div>
    `;
  }

  _normalizeMap(min, max) {
    const delta = max - min;
    return function(val) {
      return (val - min) / delta;
    };
  }

  _normalizeArray(array, min, max) {
    return array.map(this._normalizeArray(0, 1));
  }

  _normalizeDocCount(year, docCount) {
    const commonCrawlYearlyVolume = {
      2014: 1695057201,
      2015: 1643268398,
      2016: 2369264354,
      2017: 2838391323,
      2018: 2859612925,
      2019: 2080904610,
      2020: 2556108707,
      2021: 2445330855,
      2022: 3667996283
    };

    const fraction = docCount / (commonCrawlYearlyVolume[year] / 13747297828);

    return fraction;
  }

  async getTopicDomains() {
    const chartElement = this.shadowRoot.getElementById('trend-chart');

    fetch(`/api/trends/getTopicDomains?topic=${this.topicData.topicName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responses => {
        const domainLabels = [];
        const counts = [];
        const domains = {};

        for (let i = 0; i < responses.length; i++) {
          const domainLabel = responses[i].key;
          domainLabels.push(domainLabel);
          //const docCount = responses[i].doc_count;
          const docCount = this._normalizeDocCount(parseInt(yearLabel), responses[i].doc_count);
          domains[responses[i].key] = docCount;
          counts.push(docCount);
        }
        const chart = new Chart(chartElement, {
          type: 'bar',
          data: {
            labels: domainLabels,
            datasets: [
              {
                data: counts,
                label: `Top Website Hits`,
                borderColor: this.topicData.dataSet.borderColor,
                fill: false,
              },
            ],
          },
          options: {
            indexAxis: 'y',
            onClick: (event, item, legend) => {
              if (item && item.length > 0) {
                const idx = item[0].index;
                const url = `http://${domainLabels[idx]}`;
                window.open(url, '_blank');
              }
            },
            plugins: {
              tooltip: {
                enabled: true,
              },
            },
            /*            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return "";
                        }
                    }
                }
            }*/
          },
        });
      });
  }

  firstUpdatedNotUsed() {
    super.firstUpdated();
    const trendChartElement = this.shadowRoot.getElementById('trend-chart');
    const sentimentChartElement = this.shadowRoot.getElementById('sentiment-chart');

    new Chart(trendChartElement, {
      type: 'line',
      data: {
        labels: this.topicData.dataSet.labels,
        datasets: [
          {
            data: this.topicData.dataSet.data,
            label: `${this.topicData.topicName} - Trend Over Time`,
            borderColor: this.topicData.dataSet.borderColor,
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
       scales: {
            y: {
              beginAtZero: true
            }
        }
      },
    });

    new Chart(sentimentChartElement, {
      type: 'bar',
      data: {
        labels: this.topicData.dataSet.labels,
        datasets: [
          {
            data: this.topicData.dataSet.dataSentiment,
            label: `${this.topicData.topicName} - Computed Sentiment`,
            borderColor: this.topicData.dataSet.borderColor,
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        /*            scales: {
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return "";
                    }
                }
            }
        }*/
      },
    });
}

  firstUpdatedLive() {
    super.firstUpdated();
    //this.getTopicDomains();
    const lineChartElement = this.shadowRoot.getElementById('trend-chart');

    fetch(`/api/trends/getTopicTrends?topic=${this.topicData.subTopicName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responses => {
        this.responses = responses;
        const yearLabels = [];
        const counts = [];
        const years = {};

        for (let i = 0; i < responses.length; i++) {
          const yearLabel = responses[i].key_as_string.split('-')[0];
          yearLabels.push(yearLabel);
          const docCount = responses[i].doc_count;
          //const docCount = this._normalizeDocCount(parseInt(yearLabel), responses[i].doc_count);
          years[responses[i].key_as_string.split('-')[0]] = docCount;
          counts.push(docCount);
        }

        this.fire('years-and-counts', { topicName: this.topicData.topicName, years });

        new Chart(lineChartElement, {
          type: 'line',
          data: {
            labels: yearLabels,
            datasets: [
              {
                data: counts,
                label: `${this.topicData.topicName} - trend over time`,
                borderColor: this.topicData.dataSet.borderColor,
                fill: false,
              },
            ],
          },
          options: {
            plugins: {
              tooltip: {
                enabled: false,
              },
            },
            scales: {
              y: {
                min: 0,
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          },
        });
      });
  }

  firstUpdated() {
    super.firstUpdated();
    //this.getTopicDomains();
    const lineChartElement = this.shadowRoot.getElementById('trend-chart');

    const responses = this.topicData.results;
    this.responses = responses;
    const yearLabels = [];
    const counts = [];
    const years = {};

    for (let i = 0; i < responses.length; i++) {
      const yearLabel = responses[i].key_as_string.split('-')[0];
      yearLabels.push(yearLabel);
      const docCount = responses[i].doc_count;
      //const docCount = this._normalizeDocCount(parseInt(yearLabel), responses[i].doc_count);
      years[responses[i].key_as_string.split('-')[0]] = docCount;
      counts.push(docCount);
    }

    this.fire('years-and-counts', { topicName: this.topicData.topicName, years });

    new Chart(lineChartElement, {
      type: 'line',
      data: {
        labels: yearLabels,
        datasets: [
          {
            data: counts,
            label: `${this.topicData.topicName} - trend over time`,
            borderColor: this.topicData.dataSet.borderColor,
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          y: {
            min: 0,
            ticks: {
              beginAtZero: true,
            },
          },
        },
      },
    });
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('responses')) {
      setTimeout(() => {
        //this._setupChart();
      }, 200);
    }
  }
}
