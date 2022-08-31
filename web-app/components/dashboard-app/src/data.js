const createRandomData = length => {
  return new Array(length)
    .fill()
    .map((a, i) => Math.round((Math.random() * (Math.random() * 5000) * 5000) / 5000)+1000)
    .sort();
};

const createRandomSentimentData = length => {
  return new Array(length)
    .fill()
    .map((a, i) => ((Math.random() * (Math.random() * 1.8) * 1.8) / 2.0)-0.6)
    .sort();
};

export const DataLabels = [
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
];

export const Data = [
  {
    title: 'Positive descriptions',
    topicName: 'Descriptors',
    subTopicName: 'Descriptors - Positive',
    description: `Sub topic examples: blue sky | clean air | reduced pollution | fresh air | good air quality | improved air quality | alternative energy | carbon cycle | renewable energy`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Positive descriptions',
      borderColor: '#3e95cd',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Negative descriptions',
    topicName: 'Descriptors',
    subTopicName: 'Descriptors - Negative',
    description: `Sub topic examples: smog | soot | smoke | particulates | stench | foul odors | low visibility | aerosols | carbon dioxide | greenhouse gases | chlorofluorocarbons | methane | deforestation | desertification | fossil fuels | halocarbons | enteric fermentation | permafrost | salt water intrusion | greenhouse emissions `,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Negative descriptions',
      borderColor: '#551498',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Public Health Positive',
    topicName: 'Public Health',
    subTopicName: 'Public Health - Positive',
    description: `Sub topics: reduced cancer | improved quality of life | harm reduction | better health outcomes`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Public Health Positive',
      borderColor: '#3cba9f',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Public Health Negative',
    topicName: 'Public Health',
    subTopicName: 'Public Health - Negative',
    description: `Sub topic examples: coughing | bronchitis | asthma | respiratory illness | choking | life expectancy | cancer | thyroid problems | eye irritation | headaches`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Public Health Negative',
      borderColor: '#c45850',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Economics Positive',
    topicName: 'Economics',
    subTopicName: 'Economics - Positive',
    description: `Sub topics examples: clean energy | electric vehicles | carbon tax | cap and trade | tax rebates | carbon market | capacity building | CDM | emissions trading`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Economics Positive',
      borderColor: '#e8c309',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Economics Negative',
    topicName: 'Economics',
    subTopicName: 'Economics - Negative',
    description: `Sub topic examples: gas prices | diesel use | shipping | supply chain | food prices | electricity use | electricity availability   `,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Economics Negative',
      borderColor: '#54C150',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Politics Positive',
    topicName: 'Politics',
    subTopicName: 'Politics - Positive',
    description: `Sub topics examples: tree planting | community clean ups | sustainability | green initiatives | anthropogenic | IPCC | mitigation | resilience | UNFCC | adaptation | abatement | Kyoto Protocol | ratification`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Politics Positive',
      borderColor: '#c309e8',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Politics Negative',
    topicName: 'Politics',
    subTopicName: 'Politics - Negative',
    description: `Sub topic examples: fossil fuels | oligarchy | organized crime | activism | climate change | climate deniers | apathy | misinformation | eco-terrorists | over regulation | climate taxes | carbon footprint`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Politics Negative',
      borderColor: '#5450C1',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Technology Positive',
    topicName: 'Technology',
    subTopicName: 'Technology - Positive',
    description: `Sub topics examples: solar | wind power | carbon sequestration | geoengineering | afforestation | biofuels | general circulation model | climate modeling | soil carbon | carbon sink`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Technology Positive',
      borderColor: '#c309e8',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
  {
    title: 'Technology Negative',
    topicName: 'Technology',
    subTopicName: 'Technology - Negative',
    description: `Sub topic examples: anti-geoengineering | anti-sustainability | luddite | skeptical of geoengineering | natural variability `,
    dataSet: {
      data: createRandomData(DataLabels.length),
      dataSentiment: createRandomSentimentData(DataLabels.length),
      labels: DataLabels,
      label: 'Technology Negative',
      borderColor: '#5450C1',
      fill: false,
    },
    randomCount: createRandomData(DataLabels.length)[0],
  },
];
