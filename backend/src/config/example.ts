interface IExampleConfig {
  driver: 'devOption' | 'prodOption';

  config: {
    property: string;
  };
}

export default {
  driver: process.env.EXAMPLE_PROVIDER || 'devOption',

  config: {
    property: '',
  },
} as IExampleConfig;
