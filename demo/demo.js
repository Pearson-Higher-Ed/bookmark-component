import { addLocaleData } from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import tsLocaleData from 'react-intl/locale-data/ts';

window.addbookmarkHandler = function() {
  alert('adding bookmark from application');
};

window.removeBookmarkHandler = function() {
  alert('removing bookmark from application');
};

window.isCurrentPageBookmarked = function() {
  alert('checking bookmark from application');
};

const localeData = {
  en: enLocaleData,
  fr: frLocaleData,
  ts: tsLocaleData
};

function getParam(item) {
  const svalue = location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
  return svalue ? svalue[1] : svalue;
}

function init() {
  injectTapEventPlugin();
  const region = getParam('lang') || 'en';
  addLocaleData(localeData[region]);

  // Create new instance of notes component
  document.body.dispatchEvent(new CustomEvent('o.initBookmarkComponent', {
    detail: {
      elementId: 'bookmark-container',
      locale: region,
      addBookmarkHandler: window.addbookmarkHandler,
      removeBookmarkHandler: window.removeBookmarkHandler,
      isCurrentPageBookmarked: window.isCurrentPageBookmarked
    }
  }));
}

window.onload = init;
