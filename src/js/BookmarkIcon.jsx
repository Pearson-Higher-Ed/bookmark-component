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

import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import BookmarkIconFilled from './icons/BookmarkIconFilled';
import BookmarkIconNotFilled from './icons/BookmarkIconNotFilled';
import { messages } from './defaultMessages';


class BookmarkIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: this.props.data.isCurrentPageBookmarked()
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isBookmarked: nextProps.data.isCurrentPageBookmarked()
    });
  }

  renderFilled() {
    const { formatMessage } = this.props.intl;
    return (
      <BookmarkIconFilled iconStyle={this.props.iconStyle} ariaLabel={formatMessage(messages.BookmarkIconFilled)} iconClick={this.handleBookmarkClk} />
    );
  }

  renderUnFilled() {
    const { formatMessage } = this.props.intl;
    return (
      <BookmarkIconNotFilled iconStyle={this.props.iconStyle} ariaLabel={formatMessage(messages.BookmarkIconUnfilled)} iconClick={this.handleBookmarkClk} />
    );
  }

  handleBookmarkClk = () => {
    if (this.state.isBookmarked) {
      this.setState({ isBookmarked: false });
      this.props.data.removeBookmarkHandler();
    } else {
      this.setState({ isBookmarked: true });
      this.props.data.addBookmarkHandler();
    }
  };

  render() {
    return (
      this.state.isBookmarked ? this.renderFilled() : this.renderUnFilled()
    );
  }
}

BookmarkIcon.propTypes = {
  intl: intlShape.isRequired,
  data: PropTypes.shape({
    addBookmarkHandler: PropTypes.func,
    removeBookmarkHandler: PropTypes.func,
    isCurrentPageBookmarked: PropTypes.func
  }).isRequired,
  iconStyle: PropTypes.object
};
BookmarkIcon.defaultProps = {
  iconStyle: {
    fill: '#6A7070',
    width: 24,
    height: 24
  }
};

export default injectIntl(BookmarkIcon);
