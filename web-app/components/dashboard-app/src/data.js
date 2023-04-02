const createRandomData = length => {
  return new Array(length)
    .fill()
    .map((a, i) => Math.round((Math.random() * (Math.random() * 5000) * 5000) / 5000)+1000)
    ;
};

const createRandomSentimentData = length => {
  return new Array(length)
    .fill()
    .map((a, i) => ((Math.random() * (Math.random() * 1.8) * 1.8) / 2.0)-0.6)
    ;
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
  '2022'
];

export const Data = [
  {
    title: 'Positive descriptions',
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":339253},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":274420},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":248827},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":389167},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":126522},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":171675},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":151429},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":157312},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":142636},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":258944}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":181667},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":150503},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":145375},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":196967},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":221843},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":215091},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":213971},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":208959},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":277133},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":288150}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":367},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":111},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":86},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":190},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":355},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":415},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":288},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":504},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":410},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":886}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":79434},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":38398},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":49581},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":84756},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":67515},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":96019},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":86167},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":80923},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":76200},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":131746}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":26968},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":20271},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":31771},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":43282},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":16106},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":15467},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":17647},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":16359},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":20441},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":30227}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":48345},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":28283},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":18197},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":27074},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":10293},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":10893},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":11264},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":10175},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":12038},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":16897}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":75003},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":62275},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":108781},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":168306},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":63275},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":65841},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":71333},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":97799},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":82038},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":130801}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":117568},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":72869},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":68947},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":102602},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":96894},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":107811},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":130775},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":133321},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":111474},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":161288}]`),
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
    results: JSON.parse(`[{"key_as_string":"2013-01-01T00:00:00.000Z","key":1356998400000,"doc_count":445630},{"key_as_string":"2014-01-01T00:00:00.000Z","key":1388534400000,"doc_count":250934},{"key_as_string":"2015-01-01T00:00:00.000Z","key":1420070400000,"doc_count":224697},{"key_as_string":"2016-01-01T00:00:00.000Z","key":1451606400000,"doc_count":394312},{"key_as_string":"2017-01-01T00:00:00.000Z","key":1483228800000,"doc_count":38468},{"key_as_string":"2018-01-01T00:00:00.000Z","key":1514764800000,"doc_count":40610},{"key_as_string":"2019-01-01T00:00:00.000Z","key":1546300800000,"doc_count":50546},{"key_as_string":"2020-01-01T00:00:00.000Z","key":1577836800000,"doc_count":44317},{"key_as_string":"2021-01-01T00:00:00.000Z","key":1609459200000,"doc_count":42700},{"key_as_string":"2022-01-01T00:00:00.000Z","key":1640995200000,"doc_count":75373}]`),
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
  /*{
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
  },*/
];
