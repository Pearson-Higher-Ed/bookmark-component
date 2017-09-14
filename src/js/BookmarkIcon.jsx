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

  renderFilled(style) {
    const { formatMessage } = this.props.intl;
    return (
      <BookmarkIconFilled iconStyle={style} ariaLabel={formatMessage(messages.BookmarkIconFilled)} iconClick={this.handleBookmarkClk} />
    );
  }

  renderUnFilled(style) {
    const { formatMessage } = this.props.intl;
    return (
      <BookmarkIconNotFilled iconStyle={style} ariaLabel={formatMessage(messages.BookmarkIconUnfilled)} iconClick={this.handleBookmarkClk} />
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
    const style = {
      width: 24,
      height: 24
    };
    return (
      <div>
        {this.state.isBookmarked ? this.renderFilled(style) : this.renderUnFilled(style)}
      </div>
    );
  }
}

BookmarkIcon.propTypes = {
  intl: intlShape.isRequired,
  data: PropTypes.shape({
    addBookmarkHandler: PropTypes.func,
    removeBookmarkHandler: PropTypes.func,
    isCurrentPageBookmarked: PropTypes.func
  }).isRequired
};

export default injectIntl(BookmarkIcon);
