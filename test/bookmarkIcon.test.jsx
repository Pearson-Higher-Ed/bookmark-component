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
import SvgIcon from 'material-ui/SvgIcon';
import BookmarkIcon from '../src/js/BookmarkIcon';
import msgObject from '../translations';

const isCurrentPageBookmarked = {
  isCurrentPageBookmarked: function() {
    return true
  },
  removeBookmarkHandler: function() {
    console.log('removeBookmarkHandler');
  }
}

const intlObj = new InternationalSupport(msgObject, 'en');
it('renders the component correctly', () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <IntlProvider 
        locale={intlObj.getLocale()} 
        messages={intlObj.getMessages()}>
          <BookmarkIcon data={isCurrentPageBookmarked}/>
        </IntlProvider>
      </MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render onClick', () => {
  const component = renderer.create(<MuiThemeProvider><IntlProvider 
      locale={intlObj.getLocale()} 
      messages={intlObj.getMessages()}><BookmarkIcon data={isCurrentPageBookmarked} /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
   // manually trigger the callback
  tree.children[0].children[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render onKeyDown', () => {
  const component = renderer.create(<MuiThemeProvider><IntlProvider 
      locale={intlObj.getLocale()} 
      messages={intlObj.getMessages()}><BookmarkIcon data={isCurrentPageBookmarked} /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
   // manually trigger the callback
  tree.children[0].children[0].props.onKeyDown();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render onMouseEnter', () => {
  const component = renderer.create(<MuiThemeProvider><IntlProvider 
      locale={intlObj.getLocale()} 
      messages={intlObj.getMessages()}><BookmarkIcon data={isCurrentPageBookmarked} /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
   // manually trigger the callback
  tree.children[0].children[0].props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render onMouseLeave', () => {
  const component = renderer.create(<MuiThemeProvider><IntlProvider 
      locale={intlObj.getLocale()} 
      messages={intlObj.getMessages()}><BookmarkIcon data={isCurrentPageBookmarked} /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
   // manually trigger the callback
  tree.children[0].children[0].props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render SvgIcon', () => {
  const component = renderer.create(<MuiThemeProvider><IntlProvider 
      locale={intlObj.getLocale()} 
      messages={intlObj.getMessages()}><BookmarkIcon data={isCurrentPageBookmarked}><SvgIcon /></BookmarkIcon></IntlProvider></MuiThemeProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});








