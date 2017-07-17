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
import SvgIcon from 'material-ui/SvgIcon';
import { messages } from './defaultMessages';

const BookmarkIconFilled = props => (
  <SvgIcon {...props}>
    <path
      d="M11.5,-0.0004 L0.5,-0.0004 C0.224,-0.0004 0,0.2236 0,0.4996 L0,16.4996 C0,16.6996 0.119,16.8806 0.302,
      16.9586 C0.488,17.0396 0.699,16.9996 0.844,16.8636 L6,11.9876 L11.156,16.8636 C11.251,16.9526 11.375,
      16.9996 11.5,16.9996 C11.566,16.9996 11.634,16.9866 11.698,16.9586 C11.881,16.8806 12,16.6996 12,
      16.4996 L12,0.4996 C12,0.2236 11.776,-0.0004 11.5,-0.0004 L11.5,-0.0004 Z"
      fill="#FFF"
    />
  </SvgIcon>
);
const BookmarkIconUnfilled = props => (
  <SvgIcon {...props}>
    <path
      d="M13.2266667,0 L0.48,0 C0.32,0 0.16,0.154285714 0.16,0.308571429 L0.16,17.2285714 C0.16,17.3314286 0.213333333,
      17.4342857 0.32,17.4857143 C0.373333333,17.4857143 0.426666667,17.5371429 0.48,17.5371429 C0.533333333,
      17.5371429 0.586666667,17.5371429 0.64,17.4857143 L6.72,13.5257143 L13.0666667,17.4857143 C13.12,
      17.5371429 13.1733333,17.5371429 13.2266667,17.5371429 C13.28,17.5371429 13.3333333,17.5371429 13.3866667,
      17.4857143 C13.4933333,17.4342857 13.5466667,17.3314286 13.5466667,17.2285714 L13.5466667,0.308571429 C13.4933333,
      0.154285714 13.3866667,0 13.2266667,0 L13.2266667,0 Z M12.32,15.5828571 L7.41333333,12.4971429 L6.72,
      12.0857143 L6.08,12.4971429 L1.44,15.5314286 L1.44,1.13142857 L12.3733333,1.13142857 L12.3733333,
      15.5828571 L12.32,15.5828571 Z"
      id="Shape"
      fill="#FFF"
    />
  </SvgIcon>
);

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

  /* This function triggers the Bookmark to be selected or unselected on Enter click */
  handleBookmarkKeySelect = (event) => {
    if ((event.key === ' ') || (event.key === 'Enter')) {
      event.preventDefault();
      this.handleBookmarkClk();
    }
  }

  renderFilled(style) {
    const { formatMessage } = this.props.intl;
    return (
      <div className="filled" role="button" tabIndex="0" aria-label={formatMessage(messages.BookmarkIconFilled)} onClick={this.handleBookmarkClk} onKeyDown={this.handleBookmarkKeySelect}>
        <BookmarkIconFilled
          style={style.icon}
          viewBox="0 0 15 18"
        />
      </div>
    );
  }

  renderUnFilled(style) {
    const { formatMessage } = this.props.intl;
    return (
      <div className="unfilled" role="button" tabIndex="0" aria-label={formatMessage(messages.BookmarkIconUnfilled)} onClick={this.handleBookmarkClk} onKeyDown={this.handleBookmarkKeySelect}>
        <BookmarkIconUnfilled
          style={style.icon}
          viewBox="0 0 15 18"
        />
      </div>
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
      icon: {
        height: '20px',
        width: '16px'
      }
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
  })
};

export default injectIntl(BookmarkIcon);
