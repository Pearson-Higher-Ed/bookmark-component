import React, { PropTypes } from 'react';
import { messages } from './defaultMessages';
import SvgIcon from 'material-ui/SvgIcon';

class BookmarkIcon extends React.Component {
  constructor(props) {
    super(props);
    /*const _isBookmarked = this.props.data.isCurrentPageBookmarked();
    this.state ={
      'isBookmarked': _isBookmarked
    };*/
  }

  /*componentDidMount() {
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
*/
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
    } 
    else {
      this.props.data.addBookmarkHandler(addedBookmarkCbk);
    }
  }

  render() {
    return (
  <SvgIcon >
    <path d="M11.5,-0.0004 L0.5,-0.0004 C0.224,-0.0004 0,0.2236 0,0.4996 L0,16.4996 C0,16.6996 0.119,16.8806 0.302,16.9586 C0.488,17.0396 0.699,16.9996 0.844,16.8636 L6,11.9876 L11.156,16.8636 C11.251,16.9526 11.375,16.9996 11.5,16.9996 C11.566,16.9996 11.634,16.9866 11.698,16.9586 C11.881,16.8806 12,16.6996 12,16.4996 L12,0.4996 C12,0.2236 11.776,-0.0004 11.5,-0.0004 L11.5,-0.0004 Z" fill="#FFF"></path>
  </SvgIcon>
    )
  }
}
BookmarkIcon.propTypes = {
 locale: PropTypes.string,
 data: PropTypes.shape({
   addBookmarkHandler: PropTypes.func,
   removeBookmarkHandler: PropTypes.func,
   isCurrentPageBookmarked: PropTypes.func
 })
};



export default BookmarkIcon;
