import shortid from 'shortid';

class ShopProduct {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: shortid.generate(),
        name: '',
        price: '',
        color: '',
        img: ''
      },
      entity
    );
  }
};

export default ShopProduct;
