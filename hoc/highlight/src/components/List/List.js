import React from 'react';
import PropTypes from 'prop-types';

import { ITEM_TYPE } from './../../constants';
import withHighlight from './../../hoc/withHighlight';
import Article from './../Article';
import Video from './../Video';

const HighlightedArticle = withHighlight(Article);
const HighlightedVideo = withHighlight(Video);

function List({ list }) {
  return (
    <>
      {list.map(item => {
        switch (item.type) {
          case ITEM_TYPE.ARTICLE: {
            return (
              <HighlightedArticle
                key={item.id}
                {...item}
              />
            );
          }

          case ITEM_TYPE.VIDEO: {
            return (
              <HighlightedVideo
                key={item.id}
                {...item}
              />
            );
          }

          default: {
            return (
              <></>
            );
          }
        }
      })}
    </>
  );
}

List.propTypes = {
  list: PropTypes.array
};

List.defaultProps = {
  list: []
};

export default List;
