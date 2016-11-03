import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';
import BookmarkIcon from './src/js/BookmarkIcon';
import './main.scss';

const translations = {
  'fr' : frJson
};

export default class BookmarkIconComponent {
  constructor(config) {
    const locale = config.locale ? config.locale : '';
    if (locale) {
      addLocaleData(frLocaleData);
    }
    this.init(config);
  }

  init(config) {
    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
          <BookmarkIcon data={config}
              />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

export BookmarkIcon from './src/js/BookmarkIcon';

document.body.addEventListener('o.initBookmarkComponent', e => new BookmarkIconComponent(e.detail));
