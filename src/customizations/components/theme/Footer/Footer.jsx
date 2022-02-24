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
import { useTagManager } from '@package/components';

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
  useTagManager();

  const { settings } = config;
  const lang = useSelector((state) => state.intl.locale);

  const footerLinks = {
    explore: {
      en: 'Explore',
      nl: 'Ontdek',
      'nl-be': 'Ontdek',
      es: 'Explorar',
      it: 'Esplorare',
      pt: 'Explorar',
    },
    vacancies: {
      en: 'Vacancies',
      nl: 'Werken bij',
      'nl-be': 'Werken bij',
      es: 'Empleo',
      it: 'Lavori',
      pt: 'Emprego',
    },
    services: {
      en: {
        link: 'services',
        text: 'Services',
      },
      nl: {
        link: 'diensten',
        text: 'Diensten',
      },
      'nl-be': {
        link: 'diensten',
        text: 'Diensten',
      },
      es: {
        link: 'servicios',
        text: 'Servicios (inglés)',
      },
      it: {
        link: 'servizi',
        text: 'Servizi (inglese)',
      },
      pt: {
        link: 'servicos',
        text: 'Serviços',
      },
    },
    ideas: {
      en: {
        link: 'ideas',
        text: 'Ideas',
      },
      nl: {
        link: 'ideeen',
        text: 'Ideeën',
      },
      'nl-be': {
        link: 'ideeen',
        text: 'Ideeën',
      },
      es: {
        link: 'ideas',
        text: 'Ideas (inglés)',
      },
      it: {
        link: 'idee',
        text: 'Idee (inglese)',
      },
      pt: {
        link: 'ideias',
        text: 'Ideias',
      },
    },
    organizations: {
      en: {
        link: 'organizations',
        text: 'Organizations',
      },
      nl: {
        link: 'organisaties',
        text: 'Organisaties',
      },
      'nl-be': {
        link: 'organisaties',
        text: 'Organisaties',
      },
      es: {
        link: 'organizaciones',
        text: 'Organizaciones',
      },
      it: {
        link: 'organizzazioni',
        text: 'Organizzazioni',
      },
      pt: {
        link: 'organizacoes',
        text: 'Organizações',
      },
    },
    team: {
      en: {
        link: 'team',
        text: 'Team',
      },
      nl: {
        link: 'team',
        text: 'Team',
      },
      'nl-be': {
        link: 'team',
        text: 'Team',
      },
      es: {
        link: 'equipo',
        text: 'Equipo',
      },
      it: {
        link: 'squadra',
        text: 'Squadra',
      },
      pt: {
        link: 'equipa',
        text: 'Equipa',
      },
    },
    internships: {
      en: {
        text: 'Internships',
      },
      nl: {
        text: 'Stages',
      },
      'nl-be': {
        text: 'Stages',
      },
      es: {
        text: 'Prácticas',
      },
      it: {
        text: 'Tirocini',
      },
      pt: {
        text: 'Estágios',
      },
    },
    jobpositions: {
      en: {
        text: 'Job positions',
      },
      nl: {
        text: 'Vacatures',
      },
      'nl-be': {
        text: 'Vacatures',
      },
      es: {
        text: 'Puestos de trabajo',
      },
      it: {
        text: 'Posizioni lavorative',
      },
      pt: {
        text: 'Ofertas de emprego',
      },
    },
  };

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
              <p className="address">
                Beatrixgebouw 6de etage<br></br>Jaarbeursplein 6,<br></br>3521
                AL Utrecht
              </p>
            </div>
            <div className="explore-section">
              <p className="right-footer-title">
                {footerLinks['explore'][lang]}
              </p>
              <p>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/${lang}/${footerLinks['services'][lang]['link']}`
                      : '/services'
                  }
                >
                  {footerLinks['services'][lang]['text']}
                </Link>
                <br></br>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/${lang}/${footerLinks['ideas'][lang]['link']}`
                      : '/ideas'
                  }
                >
                  {footerLinks['ideas'][lang]['text']}
                </Link>
                <br></br>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/${lang}/${footerLinks['organizations'][lang]['link']}`
                      : '/organizations'
                  }
                >
                  {footerLinks['organizations'][lang]['text']}
                </Link>
                <br></br>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/${lang}/${footerLinks['team'][lang]['link']}`
                      : '/team'
                  }
                >
                  {footerLinks['team'][lang]['text']}
                </Link>
              </p>
            </div>
            <div className="vacancies-section">
              <p className="right-footer-title">Vacancies</p>
              <p>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/en/vacancies/internships`
                      : '/vacancies/internships'
                  }
                >
                  {footerLinks['internships'][lang]['text']}
                </Link>
                <br></br>
                <Link
                  to={
                    settings.isMultilingual
                      ? `/en/vacancies/job-positions`
                      : '/vacancies/job-positions'
                  }
                >
                  {footerLinks['jobpositions'][lang]['text']}
                </Link>
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
