import '@plone/volto/config';
import TestimonialsListingBlockTemplate from './components/manage/Blocks/Listing/TestimonialsTemplate';
import SliderListingBlockTemplate from './components/manage/Blocks/Listing/SliderTemplate';
import ListingsBlockTemplate from './components/manage/Blocks/Listing/ListingTemplate';
import ListingsBlockSquaresTemplate from './components/manage/Blocks/Listing/ListingTemplateSquares';
import ListingsBlockFourSquaresTemplate from './components/manage/Blocks/Listing/ListingTemplateFourSquares';
import ButtonsBlockTemplate from './components/manage/Blocks/Listing/ButtonsTemplate';
import { ColumnsView, WebslidesView, WebslidesBlocksView } from './components';

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
      id: 'listings_squares',
      isDefault: false,
      title: 'Listings (Squares)',
      template: ListingsBlockSquaresTemplate,
    },
    {
      id: 'listings_four_squares',
      isDefault: false,
      title: 'Listings (Four squares)',
      template: ListingsBlockFourSquaresTemplate,
    },
    {
      id: 'buttons',
      isDefault: false,
      title: 'Buttons',
      template: ButtonsBlockTemplate,
    },
    {
      id: 'slider',
      isDefault: false,
      title: 'Slider (ronded)',
      template: SliderListingBlockTemplate,
    },
  ];

  config.views = {
    ...config.views,
    layoutViews: {
      ...config.views.layoutViews,
      columns_view: ColumnsView,
      webslides_view: WebslidesView,
      webslides_blocks_view: WebslidesBlocksView,
    },
  };

  config.settings.showTags = false;

  return config;
}
