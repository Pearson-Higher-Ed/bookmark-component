window.onload = init;

window.addbookmarkHandler = function() {
  alert('adding bookmark from application');
};

window.removeBookmarkHandler = function() {
  alert('removing bookmark from application');
};

window.isCurrentPageBookmarked = function() {
  alert('checking bookmark from application');
};

function init() {
  const region = 'en';

  // Create new instance of notes component
  document.body.dispatchEvent(new CustomEvent('o.initBookmarkComponent', {
    detail: {
      elementId: 'bookmark-container',
      locale: region,
      addBookmarkHandler: window.addbookmarkHandler,
      removeBookmarkHandler: window.removeBookmarkHandler,
      isCurrentPageBookmarked: window.isCurrentPageBookmarked
    }
  }));
}
