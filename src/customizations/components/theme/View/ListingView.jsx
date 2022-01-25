/**
 * Document view component.
 * @module components/theme/View/ListingView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Segment, Container, Image, Grid } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * List view component class.
 * @function ListingView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const ListingView = ({ content, location, token, history }) => (
  <Container id="page-home">
    <section id="content-core">
      <Grid stackable columns={3}>
        {content.items.map((item) => (
          <Grid.Column mobile={12} tablet={6} computer={4} key={item.url}>
            {item.image_field && (
              <Segment
                basic
                className={
                  !token && item['@type'] === 'testimonial'
                    ? 'listing-item no-link'
                    : 'listing-item'
                }
              >
                {!token && item['@type'] === 'testimonial' ? (
                  <Image
                    alt={item.title}
                    src={`${flattenToAppURL(item['@id'])}/@@images/${
                      item.image_field
                    }/teaser`}
                    loading="lazy"
                  />
                ) : (
                  <Link to={item.url} title={item.title}>
                    <Image
                      alt={item.title}
                      src={`${flattenToAppURL(item['@id'])}/@@images/${
                        item.image_field
                      }/teaser`}
                      loading="lazy"
                    />
                  </Link>
                )}
              </Segment>
            )}
            <Segment basic className="listing-item-content">
              <h2>
                {!token && item['@type'] === 'testimonial' ? (
                  <>{item.title}</>
                ) : (
                  <Link to={item.url} title={item.title}>
                    {item.title}
                  </Link>
                )}
              </h2>
              {item.description && <p>{item.description}</p>}
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </section>
  </Container>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ListingView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        description: PropTypes.string,
        review_state: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListingView;
