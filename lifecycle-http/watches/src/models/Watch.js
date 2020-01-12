import nanoid from 'nanoid';

class WatchModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: nanoid(),
        name: '',
        timeZone: 0
      },
      entity
    );
  }
}

export default WatchModel;
