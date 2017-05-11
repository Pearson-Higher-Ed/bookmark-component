import React from 'react';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import BookmarkIcon from './BookmarkIcon';
import msgObject from '../../translations';

export const BookmarkIconComponent = function BookmarkIconComponent(paramsObj) { // eslint-disable-line import/prefer-default-export
  const intlObj = new InternationalSupport(msgObject, paramsObj.locale);
  return (<IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
    <BookmarkIcon
    	data={paramsObj.data}
    />
  </IntlProvider>);
};
