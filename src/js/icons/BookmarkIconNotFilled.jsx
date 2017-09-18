/**
 * PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 * Copyright © 2017 Pearson Education, Inc.
 * All Rights Reserved.
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
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

/**
 * A React component for bookmark icon.
 *
 * @author Arish kumar K
 */
const BookmarkNotFilled = props => (
  <SvgIcon {...props}>
    <path d="M10 13L6 9.224 2 13V2h8v11zm1.5-13H.5a.5.5 0 0 0-.5.5v16a.499.499 0 0 0 .844.363L6 11.988l5.156 4.875a.504.504 0 0 0 .542.095A.499.499 0 0 0 12 16.5V.5a.5.5 0 0 0-.5-.5z" />
  </SvgIcon>
);
const BookmarkIconNotFilled = ({ ariaLabel, iconClick, iconStyle }) => (
  <IconButton className="bookmarkIcon" aria-label={ariaLabel} iconStyle={iconStyle} onTouchTap={iconClick}><BookmarkNotFilled viewBox="-6 -3 24 24" /></IconButton>
);

BookmarkIconNotFilled.propTypes = {
  ariaLabel: PropTypes.string,
  iconClick: PropTypes.func,
  iconStyle: PropTypes.object
};
export default BookmarkIconNotFilled;
