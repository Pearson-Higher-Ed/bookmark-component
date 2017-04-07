import React from 'react';
import { IntlProvider } from 'react-intl';
import InternationalSupport from './InternationalSupport';
import BookmarkIcon from './BookmarkIcon';

export const BookmarkIconComponent = function BookmarkIconComponent(paramsObj) { // eslint-disable-line import/prefer-default-export
  const intlObj = new InternationalSupport(paramsObj.locale);
  return (<IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
    <BookmarkIcon
    	books={paramsObj.books}
      onBookClick={paramsObj.onBookClick}
    />
  </IntlProvider>);
};
