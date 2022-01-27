import React from 'react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Grid, Image, Segment } from 'semantic-ui-react';

const ListingTemplate = ({ items, linkTitle, linkHref, isEditMode }) => {
  return (
    <>
      <Grid stackable columns={2} className="listings">
        {items.map((item) => (
          <Grid.Column
            mobile={12}
            tablet={6}
            computer={4}
            className="listing-column"
          >
            <Segment basic className="listing-item listing-block no-link">
              <Image
                alt={item.title}
                src={flattenToAppURL(
                  `${item['@id']}/@@images/${item.image_field}/teaser`,
                )}
                loading="lazy"
              />
            </Segment>
            <Segment basic className="listing-item-content">
              <h2>{item.title ? item.title : item.id}</h2>
              {item.description && <p>{item.description}</p>}
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

ListingTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default ListingTemplate;
