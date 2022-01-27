import '@plone/volto/config';
import TestimonialsListingBlockTemplate from './components/manage/Blocks/Listing/TestimonialsTemplate';
import ListingsBlockTemplate from './components/manage/Blocks/Listing/ListingTemplate';
import ButtonsBlockTemplate from './components/manage/Blocks/Listing/ButtonsTemplate';
import { ColumnsView } from './components';

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
    {
      id: 'listings',
      isDefault: false,
      title: 'Listings',
      template: ListingsBlockTemplate,
    },
    {
      id: 'buttons',
      isDefault: false,
      title: 'Buttons',
      template: ButtonsBlockTemplate,
    },
  ];

  config.views = {
    ...config.views,
    layoutViews: {
      ...config.views.layoutViews,
      columns_view: ColumnsView,
    },
  };

  config.settings.showTags = false;

  return config;
}
