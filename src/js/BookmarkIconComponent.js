import React from 'react';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import BookmarkIcon from './BookmarkIcon';
import msgObject from '../../translations';

const BookmarkIconComponent = (paramsObj) => {
  const intlObj = new InternationalSupport(msgObject, paramsObj.locale);
  return (
    <IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
      <BookmarkIcon
        data={paramsObj.data}
      />
    </IntlProvider>
  );
};

export { BookmarkIconComponent };
