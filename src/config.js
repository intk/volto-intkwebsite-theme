import '@plone/volto/config';
import TestimonialsListingBlockTemplate from './components/manage/Blocks/Listing/TestimonialsTemplate';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    devProxyToApiPath: 'http://localhost:8080/INTK',
    isMultilingual: true,
    supportedLanguages: ['en', 'nl', 'nl-be', 'es', 'it', 'pt'],
    defaultLanguage: 'en',
  };

  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'testimonials',
      isDefault: false,
      title: 'Testimonials',
      template: TestimonialsListingBlockTemplate,
    },
  ];

  return config;
}
