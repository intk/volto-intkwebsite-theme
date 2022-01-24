import '@plone/volto/config';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    devProxyToApiPath: 'http://localhost:8080/INTK',
    isMultilingual: true,
    supportedLanguages: ['en', 'nl', 'nl-be', 'es', 'it', 'pt'],
    defaultLanguage: 'en',
  };
  return config;
}
