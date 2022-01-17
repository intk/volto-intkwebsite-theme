import '@plone/volto/config';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    devProxyToApiPath: 'http://localhost:8080/INTK',
  };
  return config;
}
