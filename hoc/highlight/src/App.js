import React from 'react';

import { ITEM_TYPE } from './constants';
import ArticleModel from './models/ArticleModel';
import VideoModel from './models/VideoModel';
import List from './components/List';

import './App.css';

const list = [
  {
    type: ITEM_TYPE.VIDEO,
    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
    views: 50
  },
  {
    type: ITEM_TYPE.VIDEO,
    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
    views: 12
  },
  {
    type: ITEM_TYPE.ARTICLE,
    title: 'Невероятные события в неизвестном поселке...',
    views: 175
  },
  {
    type: ITEM_TYPE.ARTICLE,
    title: 'Секретные данные были раскрыты!',
    views: 1532
  },
  {
    type: ITEM_TYPE.VIDEO,
    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
    views: 4253
  },
  {
    type: ITEM_TYPE.ARTICLE,
    title: 'Кот Бегемот обладает невероятной...',
    views: 12,
  },
].map(item => {
  switch (item.type) {
    case ITEM_TYPE.ARTICLE: {
      return new ArticleModel(item);
    }

    case ITEM_TYPE.VIDEO: {
      return new VideoModel(item);
    }

    default: {
      return item;
    }
  }
});

function App() {
  return (
    <List list={list} />
  );
}

export default App;
