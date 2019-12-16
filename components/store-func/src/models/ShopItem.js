class ShopItem {
  constructor(entity) {
    Object.assign(
      this,
      {
        currency: '£',
        brand: '',
        description: '',
        descriptionFull: '',
        price: 0,
        title: ''
      },
      entity
    );
  }
}

export default ShopItem;
