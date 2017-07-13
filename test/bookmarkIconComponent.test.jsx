/**
PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 *  Copyright © 2017 Pearson Education, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
**/
/* eslint-disable */


import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import BookmarkIconComponent from '../src/js/BookmarkIconComponent';
import msgObject from '../translations';

const isCurrentPageBookmarked = {
  isCurrentPageBookmarked: function() {
    return true
  }
}

const intlObj = new InternationalSupport(msgObject, 'en');
const data = {
  "BookmarkIconFilled": "Bookmarked",
  "BookmarkIconUnfilled": "Not Bookmarked"
}

it('renders the component correctly', () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <IntlProvider 
        locale={intlObj.getLocale()} 
        messages={intlObj.getMessages()}>
          <BookmarkIconComponent data={isCurrentPageBookmarked} />
        </IntlProvider>
      </MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});




