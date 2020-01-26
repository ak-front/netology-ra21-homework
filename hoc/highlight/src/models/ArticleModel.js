import nanoid from 'nanoid';

import { ITEM_TYPE } from './../constants';

class ArticleModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: nanoid(),
        type: ITEM_TYPE.ARTICLE,
        title: '',
        views: 0
      },
      entity
    );
  }
}

export default ArticleModel;
