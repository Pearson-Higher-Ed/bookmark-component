import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import ComponentOwner from './src/js/component-owner';
import msgObject from './translations';
import './main.scss';

export default class BookmarkIconDemo {
  constructor(config) {
    this.init(config);
  }

  init(config) {
    this.intlObj = new InternationalSupport(msgObject, config.locale);
    ReactDOM.render(
      <IntlProvider locale={this.intlObj.getLocale()} messages={this.intlObj.getMessages()}>
        <ComponentOwner data={config} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

export BookmarkIconComponent from './src/js/BookmarkIconComponent';

document.body.addEventListener('o.initBookmarkComponent', e => new BookmarkIconDemo(e.detail));
