import nanoid from 'nanoid';

import { ITEM_TYPE } from './../constants';

class VideoModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: nanoid(),
        type: ITEM_TYPE.VIDEO,
        url: '',
        views: 0
      },
      entity
    );
  }
}

export default VideoModel;
