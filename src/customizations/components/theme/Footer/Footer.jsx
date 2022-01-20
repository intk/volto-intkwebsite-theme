/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React from 'react';
 import { Container, List, Segment } from 'semantic-ui-react';
 import { Link } from 'react-router-dom';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 import { useSelector } from 'react-redux';
 import config from '@plone/volto/registry';
 
 const messages = defineMessages({
   copyright: {
     id: 'Copyright',
     defaultMessage: 'Copyright',
   },
 });
 
 /**
  * Component to display the footer.
  * @function Footer
  * @param {Object} intl Intl object
  * @returns {string} Markup of the component
  */
 const Footer = ({ intl }) => {
   const { settings } = config;
   const lang = useSelector((state) => state.intl.locale);
   return (
     <Segment
       role="contentinfo"
       vertical
       padded
       inverted
       color="black"
       textAlign="left"
       id="footer"
     >
       <Container>
         <Segment basic inverted color="black">
            <div className="footer-wrapper flex-grid-thirds">
                <div className="footer-address">
                    <p className="left-footer-title">INTK</p>
                    <p className="address">Beatrixgebouw 6de etage<br></br>Jaarbeursplein 6,<br></br>3521 AL Utrecht</p>
                </div>
                <div className="explore-section">
                    <p className="right-footer-title">Explore</p>
                    <p>
                        <Link to="/services">Services</Link><br></br>
                        <Link to="/ideas">Ideas</Link><br></br>
                        <Link to="/organizations">Organizations</Link><br></br>
                        <Link to="/team">Team</Link>
                    </p>
                </div>
                <div className="vacancies-section">
                    <p className="right-footer-title">Vacancies</p>
                    <p>
                        <Link to="/vacancies/internships">Internships</Link><br></br>
                        <Link to="/vacancies/job-positions">Job positions</Link>
                    </p>
                </div>
            </div>
         </Segment>
       </Container>
     </Segment>
   );
 };
 
 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 Footer.propTypes = {
   /**
    * i18n object
    */
 };
 
 export default injectIntl(Footer);