import { devConfig, prodConfig } from '../config';

const getAPIHost = () => {
  const env = process.env.NODE_ENV;

  if (env === 'production') {
    return prodConfig.api_host;
  }

  return devConfig.api_host;
};

export default getAPIHost;
