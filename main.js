import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import ComponentOwner from './src/js/component-owner';
import './main.scss';


export default class BookmarkIconDemo {
  constructor(config) {
    this.init(config);
  }

  init(config) {
    const locale = config.locale ? config.locale : 'en';
    ReactDOM.render(
   		<IntlProvider locale={locale}>
    		<ComponentOwner data={config}/>
    	</IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

export BookmarkIcon from './src/js/BookmarkIcon';

document.body.addEventListener('o.initBookmarkComponent', e => new BookmarkIconDemo(e.detail));
