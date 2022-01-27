/**
 * Document view component.
 * @module components/theme/View/DefaultView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';

import { Container, Image } from 'semantic-ui-react';
import { map } from 'lodash';
import config from '@plone/volto/registry';

import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
  getBaseUrl,
} from '@plone/volto/helpers';

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
});

/**
 * Component to display the default view.
 * @function DefaultView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const DefaultView = ({ content, intl, location }) => {
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const structuredDataTitle = 'Software Developer';
  const structuredData =
    '{"@context":"https://schema.org/","@type":"JobPosting","title":"Software Developer","description":"Create software that will revolutionize museums, cinemas, and festivals.","datePosted":"2022-01-17","validThrough":"2499-12-31","employmentType":"FULL_TIME","hiringOrganization":{"type":"Organization","name":"INTK","sameAs":"https://www.intk.com","logo":"https://www.intk.com/logo.png"},"jobLocation":{"@type":"Place","address":{"streetAddress":"Beatrixgebouw 6de etage, Jaarbeursplein 6","addressLocality":"Utrecht","addressRegion":"Utrecht","postalCode":"3521 AL","addressCountry":"NL"}}}';

  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      {content.title === structuredDataTitle && (
        <script type="application/ld+json">{structuredData}</script>
      )}

      {content.preview_image && (
        <div className="full-width">
          <Image
            className="full-width lead-image"
            src={content.preview_image.scales.large.download}
            alt={
              content.preview_caption ? content.preview_caption : content.title
            }
          />
        </div>
      )}
      <div className="content-core">
        {map(content[blocksLayoutFieldname].items, (block) => {
          const Block =
            config.blocks.blocksConfig[
              content[blocksFieldname]?.[block]?.['@type']
            ]?.['view'] || null;
          return Block !== null ? (
            <Block
              key={block}
              id={block}
              properties={content}
              data={content[blocksFieldname][block]}
              path={getBaseUrl(location?.pathname || '')}
            />
          ) : (
            <div key={block}>
              {intl.formatMessage(messages.unknownBlock, {
                block: content[blocksFieldname]?.[block]?.['@type'],
              })}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Container id="page-document">
      {content.preview_image && (
        <div className="full-width">
          <Image
            className="full-width lead-image"
            src={content.preview_image.scales.large.download}
            loading="lazy"
            alt={
              content.preview_caption ? content.preview_caption : content.title
            }
          />
        </div>
      )}
      {content.remoteUrl && (
        <span>
          The link address is:
          <a href={content.remoteUrl}>{content.remoteUrl}</a>
        </span>
      )}
      {content.text && (
        <div
          dangerouslySetInnerHTML={{
            __html: content.text.data,
          }}
        />
      )}
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DefaultView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
    /**
     * Description of the object
     */
    description: PropTypes.string,
    /**
     * Text of the object
     */
    text: PropTypes.shape({
      /**
       * Data of the text of the object
       */
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default injectIntl(DefaultView);
