import React, {PropTypes} from 'react';
import {intlShape, injectIntl} from 'react-intl';
import {messages} from './defaultMessages';

class bookmarkComponent extends React.Component {
  constructor(props) {

    super(props);
    const _isBookmarked = this.props.data.isCurrentPageBookmarked();
    this.state ={
      'isBookmarked': _isBookmarked
    };
  }

  componentDidMount() {
    this.pubsub_token = window.pubsub.subscribe('IS_BOOKMARKED', function(topic, isBookmarked) {
      if (isBookmarked) {
        this.setState({isBookmarked: true});
      } else {
        this.setState({isBookmarked: false});
      }
    }.bind(this));

  }

  componentWillUnmount() {
    window.pubsub.unsubscribe(this.pubsub_token);
  }

  toggleBookmark() {

    const that = this;
    function removedBookmarkCbk() {
      that.setState({isBookmarked: false});
    }

    function addedBookmarkCbk() {
      that.setState({isBookmarked: true});
    }

    if (this.state.isBookmarked) {
      this.props.data.removeBookmarkHandler(removedBookmarkCbk);
    } else {
      this.props.data.addBookmarkHandler(addedBookmarkCbk);
    }
  }

  render() {

    //const isBookmarked = this.props.data.isCurrentPageBookmarked();
    return (
      <button id="o-bookmark-overlay-icon"
        role="checkbox"
        onClick={this.toggleBookmark.bind(this)}
        aria-checked={this.state.isBookmarked}
        title={this.props.intl.formatMessage(this.state.isBookmarked ? messages.bookmarkedIconText : messages.bookmarkIconText)}
        aria-label={this.props.intl.formatMessage(this.state.isBookmarked ? messages.bookmarkedIconText : messages.bookmarkIconText)}
        className={this.state.isBookmarked ? 'o-bookmarked' : 'o-not-bookmarked'}>
      </button>
    )
  }
}

bookmarkComponent.propTypes = {
  intl: intlShape.isRequired,
  locale: PropTypes.string,
  data: PropTypes.shape({
    addBookmarkHandler: PropTypes.func,
    removeBookmarkHandler: PropTypes.func,
    isCurrentPageBookmarked: PropTypes.func
  })
};

export default injectIntl(bookmarkComponent);
