/**
 * Add your components here.
 * @module components
 * @example
 * import Footer from './Footer/Footer';
 *
 * export {
 *   Footer,
 * };
 */
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

import ColumnsView from './theme/View/ColumnsView';
import WebslidesView from './theme/View/WebslidesView';
import WebslidesBlocksView from './theme/View/WebslidesBlocksView';
import LeadVideo from './theme/LeadVideo/LeadVideo';
import StructuredData from './theme/StructuredData/StructuredData';

const useTagManager = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MKPZ3JS' });
  }, []);
};

export {
  ColumnsView,
  WebslidesView,
  WebslidesBlocksView,
  LeadVideo,
  StructuredData,
  useTagManager,
};
