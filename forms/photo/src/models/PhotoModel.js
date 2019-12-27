import nanoid from 'nanoid';

class PhotoModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: nanoid(),
        src: ''
      },
      entity
    );
  }
}

export default PhotoModel;
